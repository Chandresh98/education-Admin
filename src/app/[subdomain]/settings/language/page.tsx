'use client'
import { LanguageForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { LanguageParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import LanguageTable from '@/DataTables/LanguageTable'

const Languages = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LanguageParams>({
        resolver: zodResolver(LanguageForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<LanguageParams> = async (
        data: LanguageParams,
    ) => {
        // console.log(data)
        const formData = new FormData()

        for (const field of Object.keys(data) as Array<keyof typeof data>) {
            formData.append(`${field}`, `${data[field]}`)
        }

        console.log(formData)

        // await axios
        //     .post('/api/core/languages/store', formData)
        //     .then(res => {
        //         // console.log('resp' + JSON.stringify(res.data))
        //         if (res.data.success) {
        //             ToastSuccess({ message: res.data.message })
        //         } else {
        //             ToastError({ message: res.data.message })
        //         }
        //         router.refresh()
        //     })
        // .catch(err => {
        //     // console.log('err : ' + err)
        //     ToastError({ message: err })
        // })
    }

    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/4">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Language
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Language Name"
                                        {...register('name')}
                                        error={errors.name?.message}
                                        label="Language Name"
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Enter Slug"
                                        {...register('slug')}
                                        error={errors.slug?.message}
                                        label="Language Slug"
                                        required
                                    />
                                    <Input
                                        type="text"
                                        placeholder="Enter Country Code"
                                        {...register('country_code')}
                                        error={errors.country_code?.message}
                                        label="Country Code"
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Language'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full 2xl:w-3/4">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Language
                            </h3>
                        </div>
                        <LanguageTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Languages
