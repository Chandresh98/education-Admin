'use client'
import { StudentDetailForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { StudentDetailParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import StudentDetailTable from '@/DataTables/Student-management/StudentDetailTable'

import Select from '@/components/Forms/Select'
import { useState } from 'react'

const StudentDetail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<StudentDetailParams>({
        resolver: zodResolver(StudentDetailForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<StudentDetailParams> = async (
        data: StudentDetailParams,
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
            <div className="mb-4.5 gap-6">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Student Detail
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('class')}
                                            error={errors.class?.message}
                                            label="class"
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
                                        <Input
                                            type="text"
                                            placeholder="Enter Search By Student Name, Roll Number, Enroll Number, National Id, Local Id Etc"
                                            {...register('search_by_keyword')}
                                            error={
                                                errors.search_by_keyword
                                                    ?.message
                                            }
                                            label="Search By Keyword"
                                            required
                                        />
                                    </div>
                                    <div className="mt-9">
                                        <button
                                            onClick={() => setIsTable(true)}
                                            className="flex w-full justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                                            disabled={isSubmitting}>
                                            {isSubmitting
                                                ? 'Loading...'
                                                : 'Search                                            '}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {isTable && (
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                        <div className="w-full ">
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                                    <h3 className="font-medium text-black dark:text-white p-2">
                                        Student Detail
                                    </h3>
                                </div>
                                <StudentDetailTable />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DefaultLayout>
    )
}

export default StudentDetail
