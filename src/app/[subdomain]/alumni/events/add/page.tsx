'use client'
import { EventsForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { EventsParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import Calendar from 'react-calendar'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import 'react-calendar/dist/Calendar.css'
import EventsTable from '@/DataTables/Alumni/EventsTable'
import { useState } from 'react'
import Link from 'next/link'
import CheckBox from '@/components/Forms/CheckBox'
import Radio from '@/components/Forms/Radio'

const Events = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EventsParams>({
        resolver: zodResolver(EventsForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<EventsParams> = async (
        data: EventsParams,
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

    type ValuePiece = Date | null

    type Value = ValuePiece | [ValuePiece, ValuePiece]
    const [isTable, setIsTable] = useState(false)
    const [value, onChange] = useState<Value>(new Date())

    const [selectedForm, setSelectedForm] = useState<string>('all_alumni')

    return (
        <DefaultLayout>
            <div className="mb-4.5 gap-6">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Events
                            </h3>
                        </div>
                        <div className=" px-6.5 py-4">
                            <h3 className=" flex gap-6 font-medium text-black dark:text-white">
                                Event For
                                {<span className="text-meta-1"> * </span>}
                                <div className="flex gap-6">
                                    <div>
                                        <Radio
                                            {...register('all_alumni')}
                                            error={errors.all_alumni?.message}
                                            label="All Alumni"
                                            value="all_alumni"
                                            checked={
                                                selectedForm === 'all_alumni'
                                            }
                                            onChange={() =>
                                                setSelectedForm('all_alumni')
                                            }
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Radio
                                            {...register('class')}
                                            error={errors.class?.message}
                                            label="Class"
                                            value="class"
                                            checked={selectedForm === 'class'}
                                            onChange={() =>
                                                setSelectedForm('class')
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                            </h3>
                        </div>

                        {selectedForm === 'all_alumni' && (
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6.5">
                                    <div className="flex gap-6">
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Event Title"
                                                {...register('event_title')}
                                                error={
                                                    errors.event_title?.message
                                                }
                                                label="Event Title"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="date"
                                                placeholder="Enter Event From Date"
                                                {...register('event_from_date')}
                                                error={
                                                    errors.event_from_date
                                                        ?.message
                                                }
                                                label="Event From Date"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Event To Date"
                                            {...register('event_to_date')}
                                            error={
                                                errors.event_to_date?.message
                                            }
                                            label="Event To Date"
                                            required
                                        />
                                    </div>
                                    <div className="flex gap-6">
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
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Event Notification Message"
                                                {...register(
                                                    'event_notification_message',
                                                )}
                                                error={
                                                    errors
                                                        .event_notification_message
                                                        ?.message
                                                }
                                                label="Event Notification Message"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-6">
                                            <div>
                                                <CheckBox
                                                    {...register('email')}
                                                    error={
                                                        errors.email?.message
                                                    }
                                                    label="Email"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <CheckBox
                                                    {...register('sms')}
                                                    error={errors.sms?.message}
                                                    label="SMS"
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
                                                    : 'Save'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}

                        {selectedForm === 'class' && (
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6.5">
                                    <div className="flex gap-6">
                                        <div className="w-full mb-4.5">
                                            <Select
                                                options={Sessionenum}
                                                {...register(
                                                    'pass_out_session',
                                                )}
                                                error={
                                                    errors.pass_out_session
                                                        ?.message
                                                }
                                                label="Pass Out Session"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Select
                                                options={Sessionenum}
                                                {...register('class')}
                                                error={errors.class?.message}
                                                label="Select Class"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Event Title"
                                                {...register('event_title')}
                                                error={
                                                    errors.event_title?.message
                                                }
                                                label="Event Title"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="date"
                                                placeholder="Enter Event From Date"
                                                {...register('event_from_date')}
                                                error={
                                                    errors.event_from_date
                                                        ?.message
                                                }
                                                label="Event From Date"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Event To Date"
                                            {...register('event_to_date')}
                                            error={
                                                errors.event_to_date?.message
                                            }
                                            label="Event To Date"
                                            required
                                        />
                                    </div>
                                    <div className="flex gap-6">
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
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Event Notification Message"
                                                {...register(
                                                    'event_notification_message',
                                                )}
                                                error={
                                                    errors
                                                        .event_notification_message
                                                        ?.message
                                                }
                                                label="Event Notification Message"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-6">
                                            <div>
                                                <CheckBox
                                                    {...register('email')}
                                                    error={
                                                        errors.email?.message
                                                    }
                                                    label="Email"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <CheckBox
                                                    {...register('sms')}
                                                    error={errors.sms?.message}
                                                    label="SMS"
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
                                                    : 'Save'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Events
