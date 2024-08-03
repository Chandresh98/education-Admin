'use client'
// import { ModulesForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { ModulesParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import ModulesTable from '@/DataTables/ModulesTable'

const Modules = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ModulesParams>({
        // resolver: zodResolver(ModulesForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<ModulesParams> = async (
        data: ModulesParams,
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
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                            Modules
                            </h3>
                        </div>
                        
                        <ModulesTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Modules
