'use client'
import { FrontCMSSettingForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { FrontCMSSettingParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import CheckBox from '@/components/Forms/CheckBox'
// import PayrollTable from '@/DataTables/FrontCMSSettingTable'

const FrontCMSSetting = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FrontCMSSettingParams>({
        resolver: zodResolver(FrontCMSSettingForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<FrontCMSSettingParams> = async (
        data: FrontCMSSettingParams,
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
            <div className="mb-4.5 gap-6 ">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Front CMS Setting
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="w-full mb-4.5 ">
                                    <label className=" cursor-pointer flex items-center justify-between w-1/5">
                                        <span
                                            className="ms-3 text-sm font-medium text-gray-900 
                                             dark:text-gray-300 ">
                                            Front CMS
                                        </span>
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                        />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600  "></div>
                                    </label>
                                </div>
                                <div className="w-full mb-4.5 flex ">
                                    <label className=" cursor-pointer flex items-center justify-between w-1/5">
                                        <span
                                            className="ms-3 text-sm font-medium text-gray-900 
                                     dark:text-gray-300 gap-10">
                                            Sidebar
                                        </span>
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                        />
                                        <div
                                            className="relative w-11 h-6 bg-gray-200 
                                           peer-focus:outline-none peer-focus:ring-4 
                                           peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                           rounded-full peer dark:bg-gray-700 
                                           peer-checked:after:translate-x-full 
                                           rtl:peer-checked:after:-translate-x-full 
                                           peer-checked:after:border-white after:content-[''] 
                                           after:absolute after:top-[2px] after:start-[2px] 
                                           after:bg-white after:border-gray-300 after:border 
                                           after:rounded-full after:h-5 after:w-5 after:transition-all 
                                           dark:border-gray-600 peer-checked:bg-blue-600 "></div>
                                    </label>
                                </div>
                                <div className="w-full mb-4.5 flex ">
                                    <label className=" cursor-pointer flex items-center justify-between w-1/5">
                                        <span
                                            className="ms-3 text-sm font-medium text-gray-900 
                                         dark:text-gray-300 gap-10">
                                            Language RTL Text Mode
                                        </span>
                                        <input
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                        />
                                        <div
                                            className="relative w-11 h-6 bg-gray-200 
                                           peer-focus:outline-none peer-focus:ring-4 
                                           peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                           rounded-full peer dark:bg-gray-700 
                                           peer-checked:after:translate-x-full 
                                           rtl:peer-checked:after:-translate-x-full 
                                           peer-checked:after:border-white after:content-[''] 
                                           after:absolute after:top-[2px] after:start-[2px] 
                                           after:bg-white after:border-gray-300 after:border 
                                           after:rounded-full after:h-5 after:w-5 after:transition-all 
                                           dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div className="w-full">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Sidebar Option
                                    </label>
                                    <div className="mb-4.5 gap-10 flex">
                                        <div className="w-1/2">
                                            <CheckBox
                                                {...register('sidebar_option')}
                                                error={
                                                    errors.sidebar_option
                                                        ?.message
                                                }
                                                label="News"
                                            />
                                        </div>
                                        <div className="w-1/2 ">
                                            <CheckBox
                                                {...register('sidebar_option')}
                                                error={
                                                    errors.sidebar_option
                                                        ?.message
                                                }
                                                label="Complain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            {...register('logo')}
                                            error={errors.logo?.message}
                                            label="Logo "
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            {...register('favicon')}
                                            error={errors.favicon?.message}
                                            label="Favicon"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            {...register('footer_text')}
                                            error={errors.footer_text?.message}
                                            label="Footer Text"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            {...register('cookie_consent')}
                                            error={
                                                errors.cookie_consent?.message
                                            }
                                            label="Cookie Consent"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="w-full mb-4.5">
                                    <Input
                                        type="file"
                                        {...register('google_analytics')}
                                        error={errors.google_analytics?.message}
                                        label="Google Analytics"
                                        required
                                    />
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter WhatsApp URL"
                                            {...register('whatsapp_url')}
                                            error={errors.whatsapp_url?.message}
                                            label="WhatsApp URL"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Facebook URL"
                                            {...register('facebook_url')}
                                            error={errors.facebook_url?.message}
                                            label="Facebook URL"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Twitter URL"
                                            {...register('twitter_url')}
                                            error={errors.twitter_url?.message}
                                            label="Twitter URL"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Youtube URL"
                                            {...register('youtube_url')}
                                            error={errors.youtube_url?.message}
                                            label="Youtube URL"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Google Plus"
                                            {...register('google_url')}
                                            error={errors.google_url?.message}
                                            label="Google Plus"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Linkedin URL"
                                            {...register('linkedin_url')}
                                            error={errors.linkedin_url?.message}
                                            label="Linkedin URL"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Instagram URL"
                                            {...register('instagram_url')}
                                            error={
                                                errors.instagram_url?.message
                                            }
                                            label="Instagram URL"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Pinterest URL"
                                            {...register('pinterest_url')}
                                            error={
                                                errors.pinterest_url?.message
                                            }
                                            label="Pinterest URL"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : ' Save'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <div className="w-full"> */}
                {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"> */}
                {/* <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"> */}
                {/* <h3 className="font-medium text-black dark:text-white"> */}
                {/* Payroll */}
                {/* </h3> */}
                {/* </div> */}
                {/* <PayrollTable /> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </DefaultLayout>
    )
}

export default FrontCMSSetting
