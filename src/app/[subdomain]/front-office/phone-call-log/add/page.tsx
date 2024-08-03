'use client'
import { PhoneCallLogForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { PhoneCallLogParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import PhoneCallLogTable from '@/DataTables/Front-Office/PhoneCallLogTable'
import CheckBox from '@/components/Forms/CheckBox'
import { Checkbox } from '@mui/material'
import Radio from '@/components/Forms/Radio'
import Link from 'next/link'
const PhoneCallLog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PhoneCallLogParams>({
        resolver: zodResolver(PhoneCallLogForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<PhoneCallLogParams> = async (
        data: PhoneCallLogParams,
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
                                Add Phone Call Log
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Name "
                                            {...register('name')}
                                            error={errors.name?.message}
                                            label="Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Phone"
                                            {...register('phone')}
                                            error={errors.phone?.message}
                                            label="Phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            {...register('date')}
                                            error={errors.date?.message}
                                            label="Date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Description"
                                            {...register('description')}
                                            error={errors.description?.message}
                                            label="Description"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Next Follow Up Date"
                                            {...register('next_follow_up_date')}
                                            error={
                                                errors.next_follow_up_date
                                                    ?.message
                                            }
                                            label="Next Follow Up Date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Call Duration"
                                            {...register('call_duration')}
                                            error={
                                                errors.call_duration?.message
                                            }
                                            label="Call Duration"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Note"
                                            {...register('note')}
                                            error={errors.note?.message}
                                            label="Note"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5 ">
                                        <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                            Call Type
                                            {
                                                <span className="text-meta-1">
                                                    {' '}
                                                    *{' '}
                                                </span>
                                            }
                                        </label>
                                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                            <div className="gap-6">
                                                <Radio
                                                    {...register('call_type')}
                                                    error={
                                                        errors.call_type
                                                            ?.message
                                                    }
                                                    label="Incoming"
                                                    required
                                                />
                                            </div>
                                            <div className="gap-6">
                                                <Radio
                                                    {...register('call_type')}
                                                    error={
                                                        errors.call_type
                                                            ?.message
                                                    }
                                                    label="Outgoing"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
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

export default PhoneCallLog
