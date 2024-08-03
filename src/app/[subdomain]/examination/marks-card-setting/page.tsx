'use client'
import { MarksCardSettingForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { MarksCardSettingParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
// import MarksCardSettingTable from '@/DataTables/Hostel/MarksCardSettingTable'
import Select from '@/components/Forms/Select'
import CheckBox from '@/components/Forms/CheckBox'

const MarksCardSetting = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<MarksCardSettingParams>({
        resolver: zodResolver(MarksCardSettingForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<MarksCardSettingParams> = async (
        data: MarksCardSettingParams,
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
                                Add Marks Card Setting
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('student_profile')}
                                            error={
                                                errors.student_profile?.message
                                            }
                                            label="Student Profile"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Report card title"
                                            {...register('report_card_title')}
                                            error={
                                                errors.report_card_title
                                                    ?.message
                                            }
                                            label="Report Card Title"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student profile text"
                                            {...register(
                                                'student_profile_text',
                                            )}
                                            error={
                                                errors.student_profile_text
                                                    ?.message
                                            }
                                            label="Student Profile Text"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Academic text"
                                            {...register('academic_text')}
                                            error={
                                                errors.academic_text?.message
                                            }
                                            label="Academic Text"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Attendance label"
                                            {...register('attendance_label')}
                                            error={
                                                errors.attendance_label?.message
                                            }
                                            label="Attendance Label"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Gradelabel"
                                            {...register('grade_label')}
                                            error={errors.grade_label?.message}
                                            label="Grade Label"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Grade range"
                                            {...register('grade_range')}
                                            error={errors.grade_range?.message}
                                            label="Grade Range"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Obtained marks"
                                            {...register('obtained_marks')}
                                            error={
                                                errors.obtained_marks?.message
                                            }
                                            label="Obtained Marks"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Percentage range"
                                            {...register('percentage_range')}
                                            error={
                                                errors.percentage_range?.message
                                            }
                                            label="Percentage range"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Result"
                                            {...register('result')}
                                            error={errors.result?.message}
                                            label="Result"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Total marks"
                                            {...register('total_marks')}
                                            error={errors.total_marks?.message}
                                            label="Total Marks"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Overall marks"
                                            {...register('overall_marks')}
                                            error={
                                                errors.overall_marks?.message
                                            }
                                            label="Overall Marks"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Overall grade"
                                            {...register('overall_grade')}
                                            error={
                                                errors.overall_grade?.message
                                            }
                                            label="Overall Grade"
                                            required
                                        />
                                    </div>{' '}
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Performance"
                                            {...register('performance')}
                                            error={errors.performance?.message}
                                            label="Performance"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Percentage"
                                            {...register('percentage')}
                                            error={errors.percentage?.message}
                                            label="Percentage"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Marksheet date"
                                            {...register('marksheet_date')}
                                            error={
                                                errors.marksheet_date?.message
                                            }
                                            label="Marksheet Date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Parent sign"
                                            {...register('parent_sign')}
                                            error={errors.parent_sign?.message}
                                            label="Parent Sign"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Discipline"
                                            {...register('discipline')}
                                            error={errors.discipline?.message}
                                            label="Discipline"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Co scholastic areas"
                                            {...register('co_scholastic_areas')}
                                            error={
                                                errors.co_scholastic_areas
                                                    ?.message
                                            }
                                            label="Co Scholastic Areas"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Principal sign"
                                            {...register('principal_sign')}
                                            error={
                                                errors.principal_sign?.message
                                            }
                                            label="Principal Sign"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Teacher sign"
                                            {...register('teacher_sign')}
                                            error={errors.teacher_sign?.message}
                                            label="Teacher Sign"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Min passign percentage"
                                            {...register(
                                                'min_passign_percentage',
                                            )}
                                            error={
                                                errors.min_passign_percentage
                                                    ?.message
                                            }
                                            label="Min Passign Percentage"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Marksheet distrubution date"
                                            {...register(
                                                'marksheet_distrubution_date',
                                            )}
                                            error={
                                                errors
                                                    .marksheet_distrubution_date
                                                    ?.message
                                            }
                                            label="Marksheet Distrubution Date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Instructions"
                                            {...register('instructions')}
                                            error={errors.instructions?.message}
                                            label="Instructions"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5 ">
                                        <CheckBox
                                            {...register('is_attendance')}
                                            error={
                                                errors.is_attendance?.message
                                            }
                                            label="Is attendance"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_grade_range_row')}
                                            error={
                                                errors.is_grade_range_row
                                                    ?.message
                                            }
                                            label="Is grade range row"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_parent_sign')}
                                            error={
                                                errors.is_parent_sign?.message
                                            }
                                            label="Is parent sign"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5 ">
                                        <CheckBox
                                            {...register(
                                                'is_final_grade_column',
                                            )}
                                            error={
                                                errors.is_final_grade_column
                                                    ?.message
                                            }
                                            label="Is final grade column"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register(
                                                'is_result_percentage_column',
                                            )}
                                            error={
                                                errors
                                                    .is_result_percentage_column
                                                    ?.message
                                            }
                                            label="Is result percentage column"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_exam_group_name')}
                                            error={
                                                errors.is_exam_group_name
                                                    ?.message
                                            }
                                            label="Is exam group name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_unconducted_exam')}
                                            error={
                                                errors.is_unconducted_exam
                                                    ?.message
                                            }
                                            label="Is unconducted exam"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_discipline_card')}
                                            error={
                                                errors.is_discipline_card
                                                    ?.message
                                            }
                                            label="Is discipline card"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_percentage_range')}
                                            error={
                                                errors.is_percentage_range
                                                    ?.message
                                            }
                                            label="Is percentage range"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_instuctions')}
                                            error={
                                                errors.is_instuctions?.message
                                            }
                                            label="Is instuctions"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_obtained_marks')}
                                            error={
                                                errors.is_obtained_marks
                                                    ?.message
                                            }
                                            label="Is obtained marks"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_result')}
                                            error={errors.is_result?.message}
                                            label="Is result"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_attendance_total')}
                                            error={
                                                errors.is_attendance_total
                                                    ?.message
                                            }
                                            label="Is attendance total"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register(
                                                'is_co_scholastic_areas',
                                            )}
                                            error={
                                                errors.is_co_scholastic_areas
                                                    ?.message
                                            }
                                            label="Is co scholastic areas"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_student_sign')}
                                            error={
                                                errors.is_student_sign?.message
                                            }
                                            label="Is student sign"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6 py-4">
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_grade_column')}
                                            error={
                                                errors.is_grade_column?.message
                                            }
                                            label="Is grade column"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <CheckBox
                                            {...register('is_rank')}
                                            error={errors.is_rank?.message}
                                            label="Is rank"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className=" mb-4.5 2xl:w-1/2">
                                    <Input
                                        type="text"
                                        placeholder="Enter marksheet template"
                                        {...register('marksheet_template')}
                                        error={
                                            errors.marksheet_template?.message
                                        }
                                        label="Marksheet template"
                                        required
                                    />
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add Marks Card Setting'}
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

export default MarksCardSetting
