'use client'
import { SubjectGroupForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { SubjectGroupParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import SubjectGroupTable from '@/DataTables/Academic/SubjectGroupTable'
import CheckBox from '@/components/Forms/CheckBox'
import { Checkbox } from '@mui/material'
import Radio from '@/components/Forms/Radio'

const SubjectGroup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SubjectGroupParams>({
        resolver: zodResolver(SubjectGroupForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<SubjectGroupParams> = async (
        data: SubjectGroupParams,
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
        name2 = '2000'
    }
    const Sessionenum = Object.values(session)
    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add subject group
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter name"
                                        {...register('name')}
                                        error={errors.name?.message}
                                        label="Name"
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
                                <div className="w-full mb-4.5 ">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Sections
                                        {<span className="text-meta-1"> * </span>}
                                    </label>
                                    <div className='mb-4.5 flex flex-col gap-6 xl:flex-row'>
                                        <div className='w-1/2'>
                                            <Radio
                                                {...register('sections')}
                                                error={errors.sections?.message}
                                                label="A"
                                                required
                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <Radio
                                                {...register('sections')}
                                                error={errors.sections?.message}
                                                label="B"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-4.5 ">
                                    <label
                                        className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Subjects
                                        {<span className="text-meta-1"> * </span>}
                                    </label>
                                    <div className='mb-4.5 gap-10'>
                                        <div className='w-1/2'>
                                            <CheckBox
                                                {...register('subjects')}
                                                error={errors.subjects?.message}
                                                label="Science"
                                                required
                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <CheckBox
                                                {...register('subjects')}
                                                error={errors.subjects?.message}
                                                label="Math"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add subject group'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full 1xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Assign subject group
                            </h3>
                        </div>

                        <SubjectGroupTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default SubjectGroup
