'use client'
import { StudentAdmissionForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { StudentAdmissionParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
// import StudentAdmissionTable from '@/DataTables/StudentAdmissionTable'

const StudentAdmission = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<StudentAdmissionParams>({
        resolver: zodResolver(StudentAdmissionForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<StudentAdmissionParams> = async (
        data: StudentAdmissionParams,
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
            <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Student admission
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter roll number"
                                            {...register('roll_number')}
                                            error={errors.roll_number?.message}
                                            label="Roll number"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter admission date"
                                            {...register('admission_date')}
                                            error={errors.admission_date?.message}
                                            label="Admission date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter admission number"
                                            {...register('admission_number')}
                                            error={errors.admission_number?.message}
                                            label="Admission number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter class"
                                            {...register('class')}
                                            error={errors.class?.message}
                                            label="Class"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter section"
                                            {...register('section')}
                                            error={errors.section?.message}
                                            label="Section"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Entersibling"
                                            {...register('sibling')}
                                            error={errors.sibling?.message}
                                            label="Sibling"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter student category"
                                            {...register('student_category')}
                                            error={errors.student_category?.message}
                                            label="Student category"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter student house"
                                            {...register('student_house')}
                                            error={errors.student_house?.message}
                                            label="Student house"
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
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mobile number"
                                            {...register('mobile_number')}
                                            error={errors.mobile_number?.message}
                                            label="Mobile number"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter email"
                                            {...register('email')}
                                            error={errors.email?.message}
                                            label="Email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter gender"
                                            {...register('gender')}
                                            error={errors.gender?.message}
                                            label="Gender"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter blood group"
                                            {...register('blood_group')}
                                            error={errors.blood_group?.message}
                                            label="Blood group"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
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
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter date of birth"
                                            {...register('date_of_birth')}
                                            error={errors.date_of_birth?.message}
                                            label="date of birth"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father occupation"
                                            {...register('father_occupation')}
                                            error={errors.father_occupation?.message}
                                            label="Father occupation"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father email"
                                            {...register('father_email')}
                                            error={errors.father_email?.message}
                                            label="Father email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father name"
                                            {...register('father_name')}
                                            error={errors.father_name?.message}
                                            label="Father name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father phone"
                                            {...register('father_phone')}
                                            error={errors.father_phone?.message}
                                            label="Father phone"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father qualification"
                                            {...register('father_qualification')}
                                            error={errors.father_qualification?.message}
                                            label="Father qualification"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter father photo"
                                            {...register('father_photo')}
                                            error={errors.father_photo?.message}
                                            label="Father photo"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother name"
                                            {...register('mother_name')}
                                            error={errors.mother_name?.message}
                                            label="Mother name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother occupation"
                                            {...register('mother_occupation')}
                                            error={errors.mother_occupation?.message}
                                            label="Mother occupation"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother email"
                                            {...register('mother_email')}
                                            error={errors.mother_email?.message}
                                            label="Mother email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother phone"
                                            {...register('mother_phone')}
                                            error={errors.mother_phone?.message}
                                            label="Mother phone"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother qualification"
                                            {...register('mother_qualification')}
                                            error={errors.mother_qualification?.message}
                                            label="Mother qualification"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter mother_photo"
                                            {...register('mother_photo')}
                                            error={errors.mother_photo?.message}
                                            label="mother_photo"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian is"
                                            {...register('guardian_is')}
                                            error={errors.guardian_is?.message}
                                            label="Guardian_is"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian relation"
                                            {...register('guardian_relation')}
                                            error={errors.guardian_relation?.message}
                                            label="Guardian relation"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian name"
                                            {...register('guardian_name')}
                                            error={errors.guardian_name?.message}
                                            label="Guardian name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian occupation"
                                            {...register('guardian_occupation')}
                                            error={errors.guardian_occupation?.message}
                                            label="Guardian occupation"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian phone"
                                            {...register('guardian_phone')}
                                            error={errors.guardian_phone?.message}
                                            label="Guardian phone"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian qualification"
                                            {...register('guardian_qualification')}
                                            error={errors.guardian_qualification?.message}
                                            label="Guardian qualification"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-6'>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter guardian photo"
                                            {...register('guardian_photo')}
                                            error={errors.guardian_photo?.message}
                                            label="Guardian photo"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="custom fields"
                                            {...register('custom_fields')}
                                            error={errors.custom_fields?.message}
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
                                            : 'Add Student admission'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="w-full 2xl:w-1/2"> */}
                {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"> */}
                {/* <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"> */}
                {/* <h3 className="font-medium text-black dark:text-white"> */}
                {/* Student admission */}
                {/* </h3> */}
                {/* </div> */}

                {/* <StudentAdmissionTable /> */}
                {/* </div> */}
                {/* </div> */}
            </div >
        </DefaultLayout >
    )
}

export default StudentAdmission
