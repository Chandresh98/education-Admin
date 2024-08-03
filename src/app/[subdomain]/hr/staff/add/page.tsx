'use client'
import { StaffForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { StaffParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
// import StaffTable from '@/DataTables/HR/StaffTable'

const Staff = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<StaffParams>({
        resolver: zodResolver(StaffForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<StaffParams> = async (data: StaffParams) => {
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
                <div className="w-full 2xl:w-1/1">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Staff
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter staff id"
                                            {...register('staff_id')}
                                            error={errors.staff_id?.message}
                                            label="Staff ID"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter first name"
                                            {...register('first_name')}
                                            error={errors.first_name?.message}
                                            label="First name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter middle name"
                                            {...register('middle_name')}
                                            error={errors.middle_name?.message}
                                            label="Middle name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter last name"
                                            {...register('last_name')}
                                            error={errors.last_name?.message}
                                            label="Last name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('designation')}
                                            error={errors.designation?.message}
                                            label="Designation"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('department')}
                                            error={errors.department?.message}
                                            label="Department"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('role')}
                                            error={errors.role?.message}
                                            label="Role"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mobile number"
                                            {...register('mobile_number')}
                                            error={
                                                errors.mobile_number?.message
                                            }
                                            label="Mobile number"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="email"
                                            placeholder="Enter email"
                                            {...register('email')}
                                            error={errors.email?.message}
                                            label="Email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter date of birth"
                                            {...register('date_of_birth')}
                                            error={
                                                errors.date_of_birth?.message
                                            }
                                            label="Date of birth"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('gender')}
                                            error={errors.gender?.message}
                                            label="Gender"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('marital_status')}
                                            error={
                                                errors.marital_status?.message
                                            }
                                            label="Marital status"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter blood group"
                                            {...register('blood_group')}
                                            error={errors.blood_group?.message}
                                            label="Blood Group"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter date of joining"
                                            {...register('date_of_joining')}
                                            error={
                                                errors.date_of_joining?.message
                                            }
                                            label="Date of joining"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 ">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter current address"
                                            {...register('current_address')}
                                            error={
                                                errors.current_address?.message
                                            }
                                            label="Current address"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter permanent address"
                                            {...register('permanent_address')}
                                            error={
                                                errors.permanent_address
                                                    ?.message
                                            }
                                            label=" Permanent address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 ">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter qualifications"
                                            {...register('qualifications')}
                                            error={
                                                errors.qualifications?.message
                                            }
                                            label="Qualifications"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter experience"
                                            {...register('experience')}
                                            error={errors.experience?.message}
                                            label="Experience"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter photo"
                                            {...register('photo')}
                                            error={errors.photo?.message}
                                            label="Photo"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 ">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter leaves with leave type and leaves"
                                            {...register(
                                                'leaves_with_leave_type_and_leaves',
                                            )}
                                            error={
                                                errors
                                                    .leaves_with_leave_type_and_leaves
                                                    ?.message
                                            }
                                            label="Leaves with leave type and leaves"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Allowance with allowance and amount"
                                            {...register(
                                                'allowance_with_allowance_and_amount',
                                            )}
                                            error={
                                                errors
                                                    .allowance_with_allowance_and_amount
                                                    ?.message
                                            }
                                            label="Allowance with allowance and amount"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 ">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter deduction with deduction and amount"
                                            {...register(
                                                'deduction_with_deduction_and_amount',
                                            )}
                                            error={
                                                errors
                                                    .deduction_with_deduction_and_amount
                                                    ?.message
                                            }
                                            label="Deduction with deduction and amount"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter custom fields"
                                            {...register('custom_fields')}
                                            error={
                                                errors.custom_fields?.message
                                            }
                                            label="Custom fields"
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
                                            : 'Add Staff'}
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

export default Staff
