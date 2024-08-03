'use client'
import { InstituteForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { InstituteParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
// import Disable_ReasonTable, { SessionTable } from '@/DataTables/SessionTable'
import Select from '@/components/Forms/Select'
import Radio from '@/components/Forms/Radio'

const Institute = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<InstituteParams>({
        resolver: zodResolver(InstituteForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<InstituteParams> = async (
        data: InstituteParams,
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
            <div className="mb-4.5 flex flex-col gap-4 xl:flex-row">
                <div className="w-full 2xl:w-1/1">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Institute
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-4.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="University / Bord"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Session"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Attendance type"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Timezone"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Date format"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Time format"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Currency "
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Currency Symbol "
                                            {...register('currency_symbol')}
                                            error={
                                                errors.currency_symbol?.message
                                            }
                                            label="Currency Symbol"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Currency symbol position"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-4.5 ">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Biometric
                                    </label>
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-1/2">
                                            <Radio
                                                {...register('biometric')}
                                                error={
                                                    errors.biometric?.message
                                                }
                                                label="True"
                                                required
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Radio
                                                {...register('biometric')}
                                                error={
                                                    errors.biometric?.message
                                                }
                                                label="False"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Biometric type "
                                            {...register('biometric_type')}
                                            error={errors.biometric?.message}
                                            label="Biometric type"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Biometric device ids "
                                            {...register(
                                                'biometric_device_ids',
                                            )}
                                            error={errors.biometric?.message}
                                            label="Biometric device ids"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Footer text "
                                            {...register('footer_text')}
                                            error={errors.footer_text?.message}
                                            label="Footer text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-4.5 ">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Admission number auto
                                    </label>
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'admission_number_auto_generate',
                                                )}
                                                error={
                                                    errors
                                                        .admission_number_auto_generate
                                                        ?.message
                                                }
                                                label="True"
                                                required
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'admission_number_auto_generate',
                                                )}
                                                error={
                                                    errors
                                                        .admission_number_auto_generate
                                                        ?.message
                                                }
                                                label="False"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Admission number suffix"
                                            {...register(
                                                'admission_number_suffix',
                                            )}
                                            error={
                                                errors.admission_number_suffix
                                                    ?.message
                                            }
                                            label="Admission number suffix"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Admission number digits "
                                            {...register(
                                                'admission_number_digits',
                                            )}
                                            error={
                                                errors.admission_number_digits
                                                    ?.message
                                            }
                                            label="admission number digits"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Admission number start from "
                                            {...register(
                                                'admission_number_start_from',
                                            )}
                                            error={
                                                errors
                                                    .admission_number_start_from
                                                    ?.message
                                            }
                                            label="admission number start from"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Staff id number suffix "
                                            {...register(
                                                'staff_id_number_suffix',
                                            )}
                                            error={
                                                errors.staff_id_number_suffix
                                                    ?.message
                                            }
                                            label="Staff id number siffix"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Staff id number digits "
                                            {...register(
                                                'staff_id_number_digits',
                                            )}
                                            error={
                                                errors.staff_id_number_digits
                                                    ?.message
                                            }
                                            label="Staff id number digits"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Staff id number starts from"
                                            {...register(
                                                'staff_id_number_start_form',
                                            )}
                                            error={
                                                errors
                                                    .staff_id_number_start_form
                                                    ?.message
                                            }
                                            label="Staff id number starts from"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-4.5 ">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Duplicate fee receipt
                                    </label>
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'duplicate_fee_receipt',
                                                )}
                                                error={
                                                    errors.duplicate_fee_receipt
                                                        ?.message
                                                }
                                                label="True"
                                                required
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'duplicate_fee_receipt',
                                                )}
                                                error={
                                                    errors.duplicate_fee_receipt
                                                        ?.message
                                                }
                                                label="False"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Number of fee receipts"
                                            {...register(
                                                'number_of_fee_receipt',
                                            )}
                                            error={
                                                errors.number_of_fee_receipt
                                                    ?.message
                                            }
                                            label="Number of fee receipts"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('session')}
                                            error={errors.session?.message}
                                            label="Language"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Session start month"
                                            {...register('session_start_month')}
                                            error={
                                                errors.session_start_month
                                                    ?.message
                                            }
                                            label="Session start month"
                                            required
                                        />
                                    </div>

                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Week_start_from"
                                            {...register('week_start_from')}
                                            error={
                                                errors.week_start_from?.message
                                            }
                                            label="Week start from"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Institute'}
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

export default Institute
