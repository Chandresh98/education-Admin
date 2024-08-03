'use client'
import { TemplateForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import axios from '@/lib/axios'
import { TemplateParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import TemplateTable from '@/DataTables/Certificate/TemplateTable'
import Link from 'next/link'

const Template = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TemplateParams>({
        resolver: zodResolver(TemplateForm, {}, { raw: true }),
    })

    const router = useRouter()
    // const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<TemplateParams> = async (
        data: TemplateParams,
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

    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/1 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-2">
                                Template
                            </h3>
                            <div className="flex justify-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90">
                                <Link href="template/add">Add Template</Link>
                            </div>
                        </div>
                        <TemplateTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Template
