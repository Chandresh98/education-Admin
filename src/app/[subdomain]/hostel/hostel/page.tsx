'use client'
import { HostelForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { HostelParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import HostelTable from '@/DataTables/Hostel/HostelTable'
import Select from '@/components/Forms/Select'

const Hostel = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<HostelParams>({
        resolver: zodResolver(HostelForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<HostelParams> = async (
        data: HostelParams,
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
                <div className="w-full 2xl:w-1/3">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Hostel
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Name"
                                        {...register('name')}
                                        error={errors.name?.message}
                                        label="Name"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('hostel_type')}
                                        error={errors.hostel_type?.message}
                                        label="Hostel Type"
                                        required
                                    />
                                </div>

                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Total rooms"
                                        {...register('total_rooms')}
                                        error={errors.name?.message}
                                        label="Total rooms"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Total beds"
                                        {...register('total_beds')}
                                        error={errors.total_beds?.message}
                                        label="Total beds"
                                        required
                                    />
                                </div>

                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('warden')}
                                        error={errors.warden?.message}
                                        label="Warden"
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Hostel'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full 2xl:w-3/1">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Hostel
                            </h3>
                        </div>

                        <HostelTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Hostel
