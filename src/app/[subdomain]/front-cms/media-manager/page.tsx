'use client'
import { MediaManagerForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { MediaManagerParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'

const MediaManager = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<MediaManagerParams>({
        resolver: zodResolver(MediaManagerForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<MediaManagerParams> = async (
        data: MediaManagerParams,
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
            <div className="mb-4.5  gap-6 ">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Media Manager
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="grid grid-rows-3 grid-flow-col gap-6">
                                    <div className="row-span-3">
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="file"
                                                {...register(
                                                    'upload_your_file',
                                                )}
                                                error={
                                                    errors.upload_your_file
                                                        ?.message
                                                }
                                                label="Upload Your File"
                                                required
                                                className="h-40"
                                            />
                                        </div>
                                    </div>
                                    <div className="row-span-2 col-span-2">
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="URL"
                                                {...register(
                                                    'upload_youtube_video',
                                                )}
                                                error={
                                                    errors.upload_youtube_video
                                                        ?.message
                                                }
                                                label="Upload YouTube Video"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row-span-1 col-span-2 ">
                                        <div className="flex justify-end ">
                                            <button
                                                className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                                disabled={isSubmitting}>
                                                {isSubmitting
                                                    ? 'Loading...'
                                                    : 'Sumbmit'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Keyword..."
                                            {...register('search_by_file_name')}
                                            error={
                                                errors.search_by_file_name
                                                    ?.message
                                            }
                                            label="Search By File Name"
                                            required
                                        />
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default MediaManager
