'use client'
import { AdmissionEnquiryForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { AdmissionEnquiryParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import AdmissionEnquiryTable from '@/DataTables/Front-Office/AdmissionEnquiryTable'
import Link from 'next/link'

const AdmissionEnquiry = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AdmissionEnquiryParams>({
        resolver: zodResolver(AdmissionEnquiryForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<AdmissionEnquiryParams> = async (
        data: AdmissionEnquiryParams,
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
            <div className="mb-4.5  gap-6 ">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Select Criteria
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('source')}
                                            error={errors.source?.message}
                                            label="Source"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Enquiry From Date "
                                            {...register('enquiry_from_date')}
                                            error={
                                                errors.enquiry_from_date
                                                    ?.message
                                            }
                                            label="Enquiry From Date"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="date"
                                            placeholder="Enter Enquiry To Date"
                                            {...register('enquiry_to_date')}
                                            error={
                                                errors.enquiry_to_date?.message
                                            }
                                            label="Enquiry To Date"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('status')}
                                            error={errors.status?.message}
                                            label="Status"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-10 flex justify-end">
                                    <button
                                        className="flex rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Loading...' : 'Search'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="  flex  justify-between border-b border-stroke px-6.5 py-3 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white p-3 ">
                                Admission Enquiry List
                            </h3>
                            <div className=" rounded bg-primary font-medium p-3 text-gray hover:bg-opacity-90">
                                <Link href="admission-enquiry/add">
                                    Add Admission Enquiry
                                </Link>
                            </div>
                        </div>
                        <AdmissionEnquiryTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default AdmissionEnquiry
