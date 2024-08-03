'use client'
import { FrontCMSForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { FrontCMSParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FrontCMS = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FrontCMSParams>({
        resolver: zodResolver(FrontCMSForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<FrontCMSParams> = async (
        data: FrontCMSParams,
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
    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Media Manager
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
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

                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('filter_by_file_type')}
                                            error={
                                                errors.filter_by_file_type
                                                    ?.message
                                            }
                                            label="Filter By File Type"
                                            required
                                        />
                                    </div>
                                </div>
                                <img
                                    src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
                                    className="h-32 w-50 p-4"
                                    alt="Description"></img>
                                <div className="mt-10 flex justify-end gap-4">
                                    <button
                                        className="flex justify-center rounded bg-zinc-500 p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Cancel'}
                                    </button>
                                    <button
                                        className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Add'}
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

export default FrontCMS
