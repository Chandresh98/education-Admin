'use client'
// import { StaffUserLogForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { StaffUserLogParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import StaffUserLogTable from '@/DataTables/Reports/StaffUserLogTable'
const StaffUserLog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<StaffUserLogParams>({
        // resolver: zodResolver(StaffUserLogForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<StaffUserLogParams> = async (
        data: StaffUserLogParams,
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
                                User Log
                            </h3>
                            <div>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName === '/reports/user-log'
                                            ? 'border-b-2  border-blue-700 dark:border-white '
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/reports/user-log')
                                    }>
                                    All Users
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName === '/reports/user-log/staff'
                                            ? 'border-b-2  border-blue-700 dark:border-white '
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/reports/user-log/staff')
                                    }>
                                    Staff
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName ===
                                        '/reports/user-log/students'
                                            ? 'border-b-2  border-blue-700 dark:border-white '
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/reports/user-log/students',
                                        )
                                    }>
                                    Students
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName === '/reports/user-log/parent'
                                            ? 'border-b-2  border-blue-700 dark:border-white '
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/reports/user-log/parent')
                                    }>
                                    Parent
                                </button>
                            </div>
                        </div>
                        <StaffUserLogTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default StaffUserLog
