'use client'
// import { ComplainTypeForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { ComplainTypeParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import ComplainTypeTable from '@/DataTables/Front-Office/Set-Front-Office/ComplainTypeTable'
import Link from 'next/link'

const ComplainType = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ComplainTypeParams>({
        // resolver: zodResolverPComplainTypeForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<ComplainTypeParams> = async (
        data: ComplainTypeParams,
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
                            <div>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName ===
                                        '/front-office/setup-front-office/purpose'
                                            ? 'border-b-2  border-blue-700 dark:border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/front-office/setup-front-office/purpose',
                                        )
                                    }>
                                    Purpose
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white  ${
                                        pathName ===
                                        '/front-office/setup-front-office/complain-type'
                                            ? 'border-b-2  border-blue-700 dark:border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/front-office/setup-front-office/complain-type',
                                        )
                                    }>
                                    Complain Type
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName ===
                                        '/front-office/setup-front-office/source'
                                            ? 'border-b-2  border-blue-700 dark:border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/front-office/setup-front-office/source',
                                        )
                                    }>
                                    Source
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 dark:text-white ${
                                        pathName ===
                                        '/front-office/setup-front-office/reference'
                                            ? 'border-b-2  border-blue-700 dark:border-white'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push(
                                            '/front-office/setup-front-office/reference',
                                        )
                                    }>
                                    Reference
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Complain Type
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Complain Type"
                                        {...register('complain_type')}
                                        error={errors.complain_type?.message}
                                        label="Complain Type"
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
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Save'}
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
                                Complain Type List
                            </h3>
                        </div>
                        <ComplainTypeTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default ComplainType
