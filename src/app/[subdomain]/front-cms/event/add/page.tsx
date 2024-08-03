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
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import RichTextEditor from '@/components/RichTextEditor/RichTextEditor'
import { SetStateAction, useState } from 'react'
import Slider, {
    SeoDetails,
    SidebarSetting,
    FeaturedImages,
} from '@/components/Slider/slider'
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

    const [text, setText] = useState('')

    const handleChange = (value: SetStateAction<string>) => {
        setText(value)
    }

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
            <div className="mb-4.5  gap-6 ">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Event
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter title"
                                            {...register('title')}
                                            error={errors.title?.message}
                                            label="Title"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Venue"
                                            {...register('venue')}
                                            error={errors.venue?.message}
                                            label="Venue"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            {...register('event_start')}
                                            error={errors.event_start?.message}
                                            label="Event Start"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            {...register('event_end')}
                                            error={errors.event_end?.message}
                                            label="Event End"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-stroke px-6.5  dark:border-strokedark flex justify-between items-center">
                                <h3 className="font-medium text-black dark:text-white ">
                                    Description
                                    {<span className="text-meta-1"> * </span>}
                                </h3>
                                <div className="rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    <Link href="http://app.localhost:3000/front-cms">
                                        Add Media
                                    </Link>
                                </div>
                            </div>
                            <div className="px-6.5 py-4">
                                <div className="w-full mb-4">
                                    <RichTextEditor
                                        value={text}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <Slider
                                title={'SEO Details'}
                                Component={SeoDetails}
                            />
                            <Slider
                                title={'Sidebar Setting'}
                                Component={SidebarSetting}
                            />
                            <Slider
                                title={'Featured Image'}
                                Component={FeaturedImages}
                            />
                            <div className="mt-10">
                                <button
                                    className="flex w-full justify-center rounded bg-primary p-3 font-medium  text-gray hover:bg-opacity-90"
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'Loading...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Event
