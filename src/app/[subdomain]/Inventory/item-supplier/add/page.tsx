'use client'
import { ItemSupplierForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { ItemSupplierParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import ItemSupplierTable from '@/DataTables/Inventory/ItemSupplierTable'

const ItemSupplier = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ItemSupplierParams>({
        resolver: zodResolver(ItemSupplierForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<ItemSupplierParams> = async (
        data: ItemSupplierParams,
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

    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Item Supplier
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
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
                                        <Input
                                            type="text"
                                            placeholder="Enter Phone"
                                            {...register('phone')}
                                            error={errors.phone?.message}
                                            label="Phone"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Email"
                                            {...register('email')}
                                            error={errors.email?.message}
                                            label="Email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Address"
                                            {...register('address')}
                                            error={errors.address?.message}
                                            label="Address"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Contact Person Name"
                                            {...register('contact_person_name')}
                                            error={
                                                errors.contact_person_name
                                                    ?.message
                                            }
                                            label="Contact Person Name"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Contact Person Phone"
                                            {...register(
                                                'contact_person_phone',
                                            )}
                                            error={
                                                errors.contact_person_phone
                                                    ?.message
                                            }
                                            label="Contact Person Phone"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Enter Contact Person Email"
                                            {...register(
                                                'contact_person_email',
                                            )}
                                            error={
                                                errors.contact_person_email
                                                    ?.message
                                            }
                                            label="Contact Person Email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="EntDescription"
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
            </div>
        </DefaultLayout>
    )
}

export default ItemSupplier
