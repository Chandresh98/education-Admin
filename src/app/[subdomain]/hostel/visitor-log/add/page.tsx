'use client'
import { VisitorLogForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { VisitorLogParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import VisitorLogTable from '@/DataTables/Hostel/VisitorLogTable'

const VisitorLog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<VisitorLogParams>({
        resolver: zodResolver(VisitorLogForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<VisitorLogParams> = async (
        data: VisitorLogParams,
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
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Visitor Log
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter hostel"
                                            {...register('hostel')}
                                            error={errors.hostel?.message}
                                            label="Hostel"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Name"
                                            {...register('name')}
                                            error={errors.name?.message}
                                            label="Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mobile number"
                                            {...register('mobile_number')}
                                            error={
                                                errors.mobile_number?.message
                                            }
                                            label="Mobile number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter purpose"
                                            {...register('purpose')}
                                            error={errors.purpose?.message}
                                            label="Purpose"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter date"
                                            {...register('date')}
                                            error={errors.date?.message}
                                            label="Date"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="time"
                                            placeholder="Enter in time"
                                            {...register('in_time')}
                                            error={errors.in_time?.message}
                                            label="In time"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="time"
                                            placeholder="Enter out time"
                                            {...register('out_time')}
                                            error={errors.out_time?.message}
                                            label="Out time"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Visitor Log'}
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

export default VisitorLog
