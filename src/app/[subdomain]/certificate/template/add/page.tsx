'use client'
import { TemplateForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import axios from '@/lib/axios'
import { TemplateParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import CheckBox from '@/components/Forms/CheckBox'
// import TemplateTable from '@/DataTables/Certificate/TemplateTable'
const Template = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TemplateParams>({
        resolver: zodResolver(TemplateForm, {}, { raw: true }),
    })

    const router = useRouter()
    // const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<TemplateParams> = async (
        data: TemplateParams,
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
            <div className="mb-4.5 flex flex-col gap-6">
                <div className="w-full">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Template
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('belongs_to')}
                                            error={errors.belongs_to?.message}
                                            label="Belongs To"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('type')}
                                            error={errors.type?.message}
                                            label="Type"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Name"
                                            {...register('name')}
                                            error={errors.name?.message}
                                            label="Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('page_layout')}
                                            error={errors.page_layout?.message}
                                            label="Page Layout"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <CheckBox
                                        {...register('is_qr_code')}
                                        error={errors.is_qr_code?.message}
                                        label=" Is Qr Code"
                                        required
                                    />
                                </div>

                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('qr_code')}
                                        error={errors.qr_code?.message}
                                        label="Qr Code"
                                        required
                                    />
                                </div>

                                <div className="w-full mb-4.5">
                                    <CheckBox
                                        {...register('user_photo')}
                                        error={errors.user_photo?.message}
                                        label="User Photo"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Enter Photo size"
                                        {...register('photo_size')}
                                        error={errors.photo_size?.message}
                                        label="Photo size"
                                        required
                                    />
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Layout Space top"
                                            {...register('layout_space_top')}
                                            error={
                                                errors.layout_space_top?.message
                                            }
                                            label="Layout Space top"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Layout space bottom"
                                            {...register('layout_space_bottom')}
                                            error={
                                                errors.layout_space_bottom
                                                    ?.message
                                            }
                                            label="Layout space bottom"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Layout space right"
                                            {...register('layout_space_right')}
                                            error={
                                                errors.layout_space_right
                                                    ?.message
                                            }
                                            label="Layout space right"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Layout space left"
                                            {...register('layout_space_left')}
                                            error={
                                                errors.layout_space_left
                                                    ?.message
                                            }
                                            label="Layout space left"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            placeholder="Enter Signature image Principal"
                                            {...register(
                                                'signature_image_principal',
                                            )}
                                            error={
                                                errors.signature_image_principal
                                                    ?.message
                                            }
                                            label="Signature image Principal"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            placeholder="Enter Signature image Teacher"
                                            {...register(
                                                'signature_image_teacher',
                                            )}
                                            error={
                                                errors.signature_image_teacher
                                                    ?.message
                                            }
                                            label="Signature image Teacher"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            placeholder="Enter Logo Image"
                                            {...register('logo_image')}
                                            error={errors.logo_image?.message}
                                            label="Logo Image"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="file"
                                            placeholder="Enter Background"
                                            {...register('background')}
                                            error={errors.background?.message}
                                            label="Background"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Content"
                                            {...register('content')}
                                            error={errors.content?.message}
                                            label="Content"
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
                                            : 'Add Template'}
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
                {/* Template */}
                {/* </h3> */}
                {/* <div className="flex justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"> */}
                {/* <Link href="template/add">Add Staff</Link> */}
                {/* </div> */}
                {/* </div> */}
                {/* <TemplateTable /> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        </DefaultLayout>
    )
}

export default Template
