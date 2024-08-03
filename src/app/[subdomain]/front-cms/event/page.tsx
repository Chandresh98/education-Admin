'use client'
import { EventForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { EventParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import EventTable from '@/DataTables/Front-CMS/NewsTable'
import Link from 'next/link'

const Event = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EventParams>({
        resolver: zodResolver(EventForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<EventParams> = async (data: EventParams) => {
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
                <div className="w-full  ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark  flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-3">
                                Event
                            </h3>
                            <div className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                <Link href="event/add">Add Event</Link>
                            </div>
                        </div>
                        <EventTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Event
