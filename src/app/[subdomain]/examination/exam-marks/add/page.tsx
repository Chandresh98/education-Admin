'use client'
import { ExamMarksForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { ExamMarksParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
// import ExamMarksTable from '@/DataTables/Examination/ExamMarksTable'
import Select from '@/components/Forms/Select'
import { useState } from 'react'
import CheckBox from '@/components/Forms/CheckBox'

const ExamMarks = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ExamMarksParams>({
        resolver: zodResolver(ExamMarksForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<ExamMarksParams> = async (
        data: ExamMarksParams,
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
    const [isTable, setIsTable] = useState(false)
    return (
        <DefaultLayout>
            <div className="mb-4.5  gap-6">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Exam Marks
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('term')}
                                            error={errors.term?.message}
                                            label="Term"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('exam')}
                                            error={errors.exam?.message}
                                            label="Exam"
                                            required
                                        />
                                    </div>
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
                                            {...register('subject')}
                                            error={errors.subject?.message}
                                            label="Subject"
                                            required
                                        />
                                    </div>
                                    <div className="mt-8">
                                        <button
                                            onClick={() => setIsTable(true)}
                                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                            disabled={isSubmitting}>
                                            {isSubmitting
                                                ? 'Loading...'
                                                : 'Search'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {isTable && (
                    <div className="w-full">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Update Exam Marks
                                </h3>
                            </div>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6.5">
                                    <div className="flex gap-6">
                                        <div className="w-full mb-4.5">
                                            <CheckBox
                                                {...register('absent')}
                                                error={errors.absent?.message}
                                                label="Absent"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Theory Marks"
                                                {...register('theory_marks')}
                                                error={
                                                    errors.theory_marks?.message
                                                }
                                                label="Theory Marks"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Practical Mark"
                                                {...register('practical_mark')}
                                                error={
                                                    errors.practical_mark
                                                        ?.message
                                                }
                                                label="Practical Mark"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Comment"
                                                {...register('comment')}
                                                error={errors.comment?.message}
                                                label="Comment"
                                                required
                                            />
                                        </div>
                                        <div className="w-full mb-4.5">
                                            <Input
                                                type="text"
                                                placeholder="Enter Remark"
                                                {...register('remark')}
                                                error={errors.remark?.message}
                                                label="Remark"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </DefaultLayout>
    )
}

export default ExamMarks
