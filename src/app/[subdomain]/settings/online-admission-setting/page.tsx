'use client'
import { OnlineAdmissionSettingForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { OnlineAdmissionSettingParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import RichTextEditor from '@/components/RichTextEditor/RichTextEditor'
import { useState } from 'react'
import OnlineAdmissionSettingTable from '@/DataTables/OnlineAdmissionSettingTable'

const OnlineAdmissionSetting = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control, // Add control here
    } = useForm<OnlineAdmissionSettingParams>({
        resolver: zodResolver(OnlineAdmissionSettingForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<OnlineAdmissionSettingParams> = async (
        data: OnlineAdmissionSettingParams,
    ) => {
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
    const [text, setText] = useState<string>('')

    const handleChange = (value: string) => {
        setText(value)
    }
    const [isTable, setIsTable] = useState(false)

    return (
        <DefaultLayout>
            <div className="mb-4.5 gap-6 ">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Online Admission
                            </h3>
                        </div>
                        <div className="border-b border-stroke px-.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                        !isTable &&
                                        'border-solid border-2 border-b-blue-500 border-t-0 border-r-0 border-l-0 dark:border-white'
                                    } m-4 p-2`}
                                    onClick={() => setIsTable(false)}>
                                    Online Admission Form Setting
                                </button>
                                <button
                                    onClick={() => setIsTable(true)}
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4  dark:text-white ${
                                        isTable &&
                                        'border-solid border-2 border-b-blue-500 border-t-0 border-r-0 border-l-0 dark:border-white'
                                    } m-4 p-2`}>
                                    Online Admission Fields Setting
                                </button>
                            </h3>
                        </div>
                        {!isTable ? (
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6.5">
                                    <div className="w-full mb-4.5 flex">
                                        <div className=" flex justify-between px-4.5 -ml-4 gap-70 text-black dark:text-white">
                                            <h4>Online Admission</h4>
                                            <label className="relative inline-block w-14 h-8">
                                                <input
                                                    type="checkbox"
                                                    className="opacity-0 w-0 h-0 peer"
                                                />
                                                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-200 transition duration-300 ease-in-out rounded-full peer-checked:bg-blue-500 peer-focus:shadow-outline"></span>
                                                <span className="absolute left-1 bottom-1 bg-white h-6 w-6 rounded-full transition-transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-6"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full mb-4.5 flex">
                                        <div className=" flex justify-between px-4.5 -ml-4 gap-40 text-black dark:text-white">
                                            <h5>
                                                Online Admission Payment Option
                                            </h5>
                                            <label className="relative inline-block w-14 h-8">
                                                <input
                                                    type="checkbox"
                                                    className="opacity-0 w-0 h-0 peer"
                                                />
                                                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-200 transition duration-300 ease-in-out rounded-full peer-checked:bg-blue-500 peer-focus:shadow-outline"></span>
                                                <span className="absolute left-1 bottom-1 bg-white h-6 w-6 rounded-full transition-transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-6"></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Online Admission Form Fees"
                                            {...register(
                                                'online_admission_form_fees',
                                            )}
                                            error={
                                                errors
                                                    .online_admission_form_fees
                                                    ?.message
                                            }
                                            label="Online Admission Form Fees"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <RichTextEditor
                                            value={text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className="border-b border-stroke py-4 dark:border-strokedark">
                                            <h3 className="font-medium text-black dark:text-white">
                                                Terms & Conditions
                                            </h3>
                                        </div>
                                        <RichTextEditor
                                            value={text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mt-8">
                                        <button
                                            className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                            disabled={isSubmitting}>
                                            {isSubmitting
                                                ? 'Loading...'
                                                : 'Save'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <OnlineAdmissionSettingTable />
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default OnlineAdmissionSetting
