'use client'
import { EmailSettingForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { EmailSettingParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import { useState } from 'react'
import { log } from 'console'

const EmailSetting = () => {
    const [selectvalue, setselectvalue] = useState('')
    console.log(selectvalue)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<EmailSettingParams>({
        resolver: zodResolver(EmailSettingForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<EmailSettingParams> = async (
        data: EmailSettingParams,
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
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Email Setting
                            </h3>
                        </div>
                        <select
                            className=" 2xl:w-1/2  rounded border-b border-stroke px-6.5 py-4 dark:border-strokedark"
                            name="select"
                            id="select"
                            value={selectvalue}
                            onChange={e => setselectvalue(e.target.value)}>
                            <option value="SendEmail">Send Email</option>
                            <option value="smtp">SMTP</option>
                        </select>
                        {selectvalue == 'smtp' ? (
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-6.5">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter smpt username"
                                            {...register('smpt_username')}
                                            error={
                                                errors.smpt_username?.message
                                            }
                                            label="SMPT Username"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter smpt password"
                                            {...register('smpt_password')}
                                            error={
                                                errors.smpt_password?.message
                                            }
                                            label="SMPT password"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter smpt server"
                                            {...register('smpt_server')}
                                            error={errors.smpt_server?.message}
                                            label="SMPT Server"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter smpt port"
                                            {...register('smpt_port')}
                                            error={errors.smpt_port?.message}
                                            label="SMPT Port"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('smpt_security')}
                                            error={
                                                errors.smpt_security?.message
                                            }
                                            label="SMPT Security"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('smpt_auth')}
                                            error={errors.smpt_auth?.message}
                                            label="SMPT Auth"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'Loading...' : 'Save'}
                                </button>
                            </form>
                        ) : (
                            <button
                                className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 "
                                disabled={isSubmitting}>
                                {isSubmitting ? 'Loading...' : 'Save'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default EmailSetting
