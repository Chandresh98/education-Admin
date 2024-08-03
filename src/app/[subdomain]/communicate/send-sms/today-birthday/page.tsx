'use client'
import { TodayBirthdayForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { TodayBirthdayParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { SetStateAction, useState } from 'react'
import Link from 'next/link'
import CheckBox from '@/components/Forms/CheckBox'

const TodayBirthday = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TodayBirthdayParams>({
        resolver: zodResolver(TodayBirthdayForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const [text, setText] = useState('')

    const handleChange = (value: SetStateAction<string>) => {
        setText(value)
    }
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const onSubmit: SubmitHandler<TodayBirthdayParams> = async (
        data: TodayBirthdayParams,
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
                                Send SMS
                            </h3>
                            <div>
                                {' '}
                                <div>
                                    <button
                                        className={`text-blue-700 font-bold px-6 py-3 mx-4 dark:text-white ${
                                            pathName ===
                                            '/communicate/send-sms/group'
                                                ? 'border-b-2  border-blue-700  dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-sms/group',
                                            )
                                        }>
                                        Group
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                            pathName ===
                                            '/communicate/send-sms/individual'
                                                ? 'border-b-2  border-blue-700  dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-sms/individual',
                                            )
                                        }>
                                        Individual
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                            pathName ===
                                            '/communicate/send-sms/class'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-sms/class',
                                            )
                                        }>
                                        Class
                                    </button>
                                    <button
                                        className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                            pathName ===
                                            '/communicate/send-sms/today-birthday'
                                                ? 'border-b-2  border-blue-700 dark:border-white'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            router.push(
                                                '/communicate/send-sms/today-birthday',
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
                                        <div className="w-full mb-4.5 flex gap-6 ">
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Send Through
                                                {
                                                    <span className="text-meta-1">
                                                        {' '}
                                                        *{' '}
                                                    </span>
                                                }
                                            </label>
                                            <div className="mb-4.5 flex gap-10">
                                                <div className=" gap-6">
                                                    <CheckBox
                                                        {...register(
                                                            'send_through',
                                                        )}
                                                        error={
                                                            errors.send_through
                                                                ?.message
                                                        }
                                                        label="SMS"
                                                        required
                                                    />
                                                </div>
                                                <div className="gap-6">
                                                    <CheckBox
                                                        {...register(
                                                            'send_through',
                                                        )}
                                                        error={
                                                            errors.send_through
                                                                ?.message
                                                        }
                                                        label="Mobile App"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Template ID"
                                                {...register('template_id')}
                                                error={
                                                    errors.template_id?.message
                                                }
                                                label="Template ID (This firld id reqiured only for indian sms gateway)"
                                                required
                                            />
                                        </div>

                                        <div className="py-3 flex justify-between">
                                            <h3 className="font-medium text-black dark:text-white p-2">
                                                Message{' '}
                                                {
                                                    <span className="text-meta-1">
                                                        {' '}
                                                        *{' '}
                                                    </span>
                                                }
                                            </h3>
                                        </div>
                                        <div className="w-full mb-4 font-sm text-black dark:text-white  dark:border-strokedark dark:bg-boxdark ">
                                            <textarea
                                                value={text}
                                                onChange={handleTextChange}
                                                rows={10}
                                                className=" w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark outline-none p-4"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className=" w-100 gap-6 mr-6.5">
                                <div className="border-b border-stroke px-4.5 py-3 dark:border-strokedark  flex justify-between">
                                    <h3 className="font-medium text-black dark:text-white p-2">
                                        Message To
                                        {
                                            <span className="text-meta-1">
                                                {' '}
                                                *{' '}
                                            </span>
                                        }
                                    </h3>
                                </div>
                                <div className="h-50"></div>
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
export default TodayBirthday
function setValue(arg0: string, arg1: any) {
    throw new Error('Function not implemented.')
}
