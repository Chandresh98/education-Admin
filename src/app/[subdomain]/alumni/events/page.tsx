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
    return (
        <DefaultLayout>
            <div className="mb-4.5 gap-6">
                <div className="w-full 2xl:w-1/4 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5 ">
                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    className="rounded-lg"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full 2xl:w-1/1 ">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                                <h3 className="font-medium text-black dark:text-white p-2">
                                    Events
                                </h3>
                                <div className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    <Link href="events/add">Add Events</Link>
                                </div>
                            </div>
                            <EventsTable />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Events
