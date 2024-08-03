'use client'
import { ComplainForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { ComplainParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import ComplainTable from '@/DataTables/Front-Office/ComplainTable'
import CheckBox from '@/components/Forms/CheckBox'
import { Checkbox } from '@mui/material'
import Radio from '@/components/Forms/Radio'

const Complain = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ComplainParams>({
        resolver: zodResolver(ComplainForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<ComplainParams> = async (
        data: ComplainParams,
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
                                Select Criteria
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className=" flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('complain_type')}
                                            error={
                                                errors.complain_type?.message
                                            }
                                            label="Complain Type"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('source')}
                                            error={errors.source?.message}
                                            label="Source"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className=" flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Complain By "
                                            {...register('complain_by')}
                                            error={errors.complain_by?.message}
                                            label="Complain By"
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
                                <div className=" flex gap-6">
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
                                <div className=" flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Action Taken"
                                            {...register('action_taken')}
                                            error={errors.action_taken?.message}
                                            label="Action Taken"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Assigned"
                                            {...register('assigned')}
                                            error={errors.assigned?.message}
                                            label="Assigned"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className=" flex gap-6">
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
                                            type="file"
                                            placeholder="Enter Drag and drop a file here or click"
                                            {...register('attach_document')}
                                            error={
                                                errors.attach_document?.message
                                            }
                                            label="Attach Document"
                                            required
                                        />
                                    </div>
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
            </div>
        </DefaultLayout>
    )
}

export default Complain
