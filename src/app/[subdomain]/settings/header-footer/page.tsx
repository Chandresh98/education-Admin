'use client'
import { PayslipForm } from '@/Schemas/Schema'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'

import axios from '@/lib/axios'
import { PayslipParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import RichTextEditor from '@/components/RichTextEditor/RichTextEditor'
import ImageUpload from '@/components/ImageUpload/ImageUpload'
import { SetStateAction, useState } from 'react'

const Payslip = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
    } = useForm<PayslipParams>({
        resolver: zodResolver(PayslipForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const [text, setText] = useState('')
    const [headerImage, setHeaderImage] = useState<File | null>(null)

    const handleTextChange = (value: SetStateAction<string>) => {
        setText(value)
    }

    const handleImageChange = (file: File | null) => {
        setHeaderImage(file)
        setValue('header_image', file as any) // Update form value
    }

    const onSubmit: SubmitHandler<PayslipParams> = async (
        data: PayslipParams,
    ) => {
        const formData = new FormData()

        for (const field of Object.keys(data) as Array<keyof typeof data>) {
            formData.append(`${field}`, `${data[field]}`)
        }

        if (headerImage) {
            formData.append('header_image', headerImage)
        }

        console.log(formData)

        //     await axios
        //         .post('/api/core/sessions/store', formData)
        //         .then(res => {
        //             if (res.data.success) {
        //                 ToastSuccess({ message: res.data.message })
        //             } else {
        //                 ToastError({ message: res.data.message })
        //             }
        //             router.refresh()
        //         })
        //         .catch(err => {
        //             ToastError({ message: err })
        //         })
    }

    const pathName = usePathname()
    return (
        <DefaultLayout>
            <div className="mb-4.5 ">
                <div className="w-full 2xl:w-1/1 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-3">
                                Print Header Footer
                            </h3>
                            <div>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                        pathName ===
                                        '/settings/header-footer/payslip'
                                            ? 'border-b-2  border-blue-700 border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/settings/header-footer/payslip',
                                        )
                                    }>
                                    Payslip
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                        pathName ===
                                        '/settings/header-footer/online-admission-receipt'
                                            ? 'border-b-2  border-blue-700 border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/settings/header-footer/online-admission-receipt',
                                        )
                                    }>
                                    Online Admission Receipt
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                        pathName ===
                                        '/setting/header-footer/fees-receipt'
                                            ? 'border-b-2  border-blue-700 border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/settings/header-footer/fees-receipt',
                                        )
                                    }>
                                    Fees Receipt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="border-b border-stroke  py-3 dark:border-strokedark  flex justify-between">
                                    <h3 className="font-medium text-black dark:text-white ">
                                        Header Image (2230px X 300px)
                                    </h3>
                                </div>
                                <ImageUpload
                                    label=""
                                    onFileChange={handleImageChange}
                                    error={errors.header_image?.message}
                                />
                                <div className="border-b border-stroke  py-3 dark:border-strokedark  flex justify-between">
                                    <h3 className="font-medium text-black dark:text-white ">
                                        Footer Content
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
                                        onChange={handleTextChange}
                                    />
                                </div>
                                <div className="mt-10 flex justify-end ">
                                    <button
                                        className="flex justify-end rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 hover:bg-blue-700 transition duration-300"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Payslip
