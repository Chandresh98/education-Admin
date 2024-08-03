'use client'
import { IndividualEmailForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { IndividualEmailParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import RichTextEditor from '@/components/RichTextEditor/RichTextEditor'
import { SetStateAction, useState } from 'react'
import Link from 'next/link'
import CheckBox from '@/components/Forms/CheckBox'
import Select from '@/components/Forms/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const IndividualEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IndividualEmailParams>({
        resolver: zodResolver(IndividualEmailForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const [text, setText] = useState('')

    const handleChange = (value: SetStateAction<string>) => {
        setText(value)
    }

    const onSubmit: SubmitHandler<IndividualEmailParams> = async (
        data: IndividualEmailParams,
    ) => {
        // console.log(data)
        const formData = new FormData()

        for (const field of Object.keys(data) as Array<keyof typeof data>) {
            formData.append(`${field}`, `${data[field]}`)
        }

        console.log(formData)

        //     await axios
        //         .post('/api/core/sessions/store', formData)
        //         .then(res => {
        //             // console.log('resp' + JSON.stringify(res.data))
        //             if (res.data.success) {
        //                 ToastSuccess({ message: res.data.message })
        //             } else {
        //                 ToastError({ message: res.data.message })
        //             }
        //             router.refresh()
        //         })
        //         .catch(err => {
        //             // console.log('err : ' + err)
        //             ToastError({ message: err })
        //         })
    }

    enum session {
        name1 = '2010',
        name2 = '2000',
    }
    const Sessionenum = Object.values(session)
    const pathName = usePathname()

    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-2">
                                Send Email
                            </h3>
                            <div>
                                {' '}
                                <div>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                            pathName ===
                                            '/communicate/send-email/group'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-email/group',
                                            )
                                        }>
                                        Group
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                            pathName ===
                                            '/communicate/send-email/individual'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-email/individual',
                                            )
                                        }>
                                        Individual
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white  ${
                                            pathName ===
                                            '/communicate/send-email/class'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-email/class',
                                            )
                                        }>
                                        Class
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white  ${
                                            pathName ===
                                            '/communicate/send-email/today-birth'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-email/today-birthday',
                                            )
                                        }>
                                        Today's Birthday
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="mb-4.5 gap-6 flex">
                        <div className="w-full 2xl:w-1/1">
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <form
                                    action=""
                                    onSubmit={handleSubmit(onSubmit)}>
                                    <div className="p-6.5">
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Title"
                                                {...register('title')}
                                                error={errors.title?.message}
                                                label="Title"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="file"
                                                placeholder=""
                                                {...register('attachment')}
                                                error={
                                                    errors.attachment?.message
                                                }
                                                label="Attachment"
                                                required
                                            />
                                        </div>
                                        <div className="py-3  flex justify-between">
                                            <h3 className="font-medium text-black dark:text-white ">
                                                Message{' '}
                                                {
                                                    <span className="text-meta-1">
                                                        {' '}
                                                        *{' '}
                                                    </span>
                                                }
                                            </h3>
                                        </div>
                                        <div className="w-full mb-4">
                                            <RichTextEditor
                                                value={text}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className=" w-100 gap-6 mr-6.5">
                                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                    <div className="border-b border-stroke px-4.5 py-3 dark:border-strokedark  ">
                                        <h3 className="font-medium text-black dark:text-white p-2">
                                            Message To
                                            {
                                                <span className="text-meta-1">
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            }
                                        </h3>

                                        <div className="flex border-stroke  dark:border-strokedark items-center  ">
                                            <div className="flex mb-4.5">
                                                <Select
                                                    options={Sessionenum}
                                                    {...register('select')}
                                                    error={
                                                        errors.select?.message
                                                    }
                                                    label=""
                                                />
                                            </div>
                                            <div className="mb-4.5">
                                                <Input
                                                    type="text"
                                                    placeholder=""
                                                    label=""
                                                />
                                            </div>
                                            <div className="mb-2 flex">
                                                <button
                                                    className="rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 "
                                                    disabled={isSubmitting}>
                                                    {isSubmitting
                                                        ? 'Loading...'
                                                        : 'Add'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4.5 gap-6 px-6.5 py-3 h-60 ">
                                        <div className="relative w-full">
                                            <div className="w-full mb-4.5">
                                                <Input
                                                    type="text"
                                                    placeholder="Search By File Name "
                                                    label="Search By File Name"
                                                />
                                                <FontAwesomeIcon
                                                    icon={faSearch}
                                                    className="absolute top-15 right-4 transform -translate-y-1/2 text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6.5 py-3 flex justify-end">
                        <button
                            className="rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                            disabled={isSubmitting}>
                            {isSubmitting ? 'Loading...' : 'Send'}
                        </button>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default IndividualEmail
