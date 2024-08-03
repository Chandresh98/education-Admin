'use client'
// import { UserStaffForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { UserStaffParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import UserStaffTable from '@/DataTables/User/UserStaffTable'
import Link from 'next/link'

const UserStaff = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<UserStaffParams>({
        // resolver: zodResolver(UserStaffForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<UserStaffParams> = async (
        data: UserStaffParams,
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

    const pathName = usePathname()
    return (
        <DefaultLayout>
            <div className="mb-4.5 ">
                <div className="w-full 2xl:w-1/1 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-2">
                                User
                            </h3>
                            <div>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/student'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/student')
                                    }>
                                    Student
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/staff'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/staff')
                                    }>
                                    Staff
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/parent'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/parent')
                                    }>
                                    Parent
                                </button>
                            </div>
                        </div>

                        <UserStaffTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default UserStaff
