'use client'
import { EventForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { EventParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import Slider from '@/components/Slider/slider'

const Event = () => {
    // const {
    // register,
    // handleSubmit,
    // formState: { errors, isSubmitting },
    // } = useForm<EventParams>({
    // resolver: zodResolver(EventForm, {}, { raw: true }),
    // })
    //
    // const router = useRouter()
    // const { ToastError, ToastSuccess } = useToast()
    //
    // const onSubmit: SubmitHandler<EventParams> = async (data: EventParams) => {
    // console.log(data)
    // const formData = new FormData()
    //
    // for (const field of Object.keys(data) as Array<keyof typeof data>) {
    // formData.append(`${field}`, `${data[field]}`)
    // }
    //
    // console.log(formData)
    //
    // await axios
    // .post('/api/core/sessions/store', formData)
    // .then(res => {
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
    // }
    const data = []
    return (
        <div className="mb-4.5  gap-6 ">
            <div className="w-full ">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Category Report
                        </h3>
                    </div>
                    <div className="m-5 overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className=" px-4 py-2">Class</th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        SC
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        ST
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        CAT1
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        2A
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        2B
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        3A
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        3B
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        GEN
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        Others
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        II B
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        sc
                                    </th>
                                    <th colSpan="2" className=" px-4 py-2">
                                        Total
                                    </th>
                                </tr>
                                <tr>
                                    <th className=" px-4 py-2"></th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className="bpx-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F </th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                    <th className=" px-4 py-2">M</th>
                                    <th className=" px-4 py-2">F</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className="even:bg-gray-50">
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.Class}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.SC_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.SC_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.ST_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.ST_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.CAT1_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.CAT1_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.A2_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.A2_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.B2_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.B2_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.A3_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.A3_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.B3_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.B3_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.GEN_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.GEN_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.Others_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.Others_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.II_B_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.II_B_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.sc_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.sc_F}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.Total_M}
                                        </td>
                                        <td className="border border-gray-200 px-4 py-2">
                                            {row.Total_F}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
