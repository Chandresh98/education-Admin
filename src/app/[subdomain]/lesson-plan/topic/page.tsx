'use client'
import { TopicForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { TopicParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import TopicTable from '@/DataTables/Lesson-Plan/TopicTable'
import CheckBox from '@/components/Forms/CheckBox'
import { Checkbox } from '@mui/material'
import Radio from '@/components/Forms/Radio'
import { classNames } from 'primereact/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Topic = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TopicParams>({
        resolver: zodResolver(TopicForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<TopicParams> = async (data: TopicParams) => {
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

    const [ToipcComponent, setLessonComponents] = useState<number[]>([0])
    const addMore = () => {
        setLessonComponents([...ToipcComponent, ToipcComponent.length + 1])
    }
    const onDelete = (id: number) => {
        setLessonComponents(ToipcComponent.filter(cid => cid != id))
    }
    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Topic
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('class')}
                                        error={errors.class?.message}
                                        label="Class"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('section')}
                                        error={errors.section?.message}
                                        label="Section"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('subject_group')}
                                        error={errors.subject_group?.message}
                                        label="subject"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('subject')}
                                        error={errors.subject?.message}
                                        label="Subject"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('lesson')}
                                        error={errors.lesson?.message}
                                        label="Lesson"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end mt-10">
                                    <button
                                        className="flex justify-center rounded bg-strokedark p-3 font-medium text-gray hover:bg-opacity-90"
                                        onClick={addMore}>
                                        Add more
                                    </button>
                                </div>
                                <div>
                                    {ToipcComponent.map(val => (
                                        <LessonInp
                                            key={val}
                                            id={val}
                                            onDelete={onDelete}
                                        />
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Search'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Topic List
                            </h3>
                        </div>
                        <TopicTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
function LessonInp({
    id,
    onDelete,
}: {
    id: number
    onDelete: (id: number) => void
}) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TopicParams>({
        resolver: zodResolver(TopicForm, {}, { raw: true }),
    })
    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()
    const onSubmit: SubmitHandler<TopicParams> = async (data: TopicParams) => {
        // console.log(data)
        const formData = new FormData()
        for (const field of Object.keys(data) as Array<keyof typeof data>) {
            formData.append(`${field}`, `${data[field]}`)
        }
    }
    return (
        <div className="flex gap-6">
            <div className="w-full mb-4.5">
                <Input
                    type="text"
                    placeholder="Enter Lesson Plan"
                    {...register('topic_name')}
                    error={errors.topic_name?.message}
                    label="Topic Name"
                    required
                />
            </div>

            <button
                onClick={() => onDelete(id)}
                className="self-center w-5 h-2 items-center">
                <FontAwesomeIcon icon={faXmark} size="xl" />
            </button>
        </div>
    )
}

export default Topic
