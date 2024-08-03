'use client'
import { LibrarySettingForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { LibrarySettingParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
// import LibrarySettingTable from '@/DataTables/Library/LibrarySettingTable'

const LibrarySetting = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LibrarySettingParams>({
        resolver: zodResolver(LibrarySettingForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<LibrarySettingParams> = async (
        data: LibrarySettingParams,
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

    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Library Setting /Student Setting
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Return Due Days"
                                        {...register('return_due_days')}
                                        error={errors.return_due_days?.message}
                                        label="Return Due Days"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Max Book Limit"
                                        {...register('max_book_limit')}
                                        error={errors.max_book_limit?.message}
                                        label="Max Book Limit"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Fine Amount Per Day"
                                        {...register('fine_amount_per_day')}
                                        error={
                                            errors.fine_amount_per_day?.message
                                        }
                                        label="Fine Amount Per Day"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Fine Start Day After Due Days"
                                        {...register(
                                            'fine_start_day_after_due_days',
                                        )}
                                        error={
                                            errors.fine_start_day_after_due_days
                                                ?.message
                                        }
                                        label="Fine Start Day After Due Days"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Max Number of Due Allowed"
                                        {...register(
                                            'max_number_of_due_allowed',
                                        )}
                                        error={
                                            errors.max_number_of_due_allowed
                                                ?.message
                                        }
                                        label="Max Number of Due Allowed"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Block Membership after Fine Amount Reach"
                                        {...register(
                                            'block_membership_after_fine_amount_Reach',
                                        )}
                                        error={
                                            errors
                                                .block_membership_after_fine_amount_Reach
                                                ?.message
                                        }
                                        label="Block Membership after Fine Amount Reach"
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Student Setting'}
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
                                Staff Setting
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Return Due Days"
                                        {...register('return_due_days')}
                                        error={errors.return_due_days?.message}
                                        label="Return Due Days"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Max Book Limit"
                                        {...register('max_book_limit')}
                                        error={errors.max_book_limit?.message}
                                        label="Max Book Limit"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Fine Amount Per Day"
                                        {...register('fine_amount_per_day')}
                                        error={
                                            errors.fine_amount_per_day?.message
                                        }
                                        label="Fine Amount Per Day"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Fine Start Day After Due Days"
                                        {...register(
                                            'fine_start_day_after_due_days',
                                        )}
                                        error={
                                            errors.fine_start_day_after_due_days
                                                ?.message
                                        }
                                        label="Fine Start Day After Due Days"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Max Number of Due Allowed"
                                        {...register(
                                            'max_number_of_due_allowed',
                                        )}
                                        error={
                                            errors.max_number_of_due_allowed
                                                ?.message
                                        }
                                        label="Max Number of Due Allowed"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Block Membership after Fine Amount Reach"
                                        {...register(
                                            'block_membership_after_fine_amount_Reach',
                                        )}
                                        error={
                                            errors
                                                .block_membership_after_fine_amount_Reach
                                                ?.message
                                        }
                                        label="Block Membership after Fine Amount Reach"
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Staff Setting'}
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

export default LibrarySetting
