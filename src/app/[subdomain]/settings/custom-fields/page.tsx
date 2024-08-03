'use client'
import { CustomFieldsForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { CustomFieldsParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import Radio from '@/components/Forms/Radio'
import CustomFieldsTable from '@/DataTables/CustomFieldsTable'

const CustomFields = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<CustomFieldsParams>({
        resolver: zodResolver(CustomFieldsForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<CustomFieldsParams> = async (
        data: CustomFieldsParams,
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
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Custom Fields
                            </h3>
                        </div>
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-6.5">
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('belongs')}
                                            error={errors.belongs?.message}
                                            label="Belongs"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            {...register('name')}
                                            error={errors.name?.message}
                                            label="Name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('from_group')}
                                            error={errors.from_group?.message}
                                            label="Form group"
                                            required
                                        />
                                    </div>
                                    <div className="w-full mb-4.5">
                                        <Select
                                            options={Sessionenum}
                                            {...register('type')}
                                            error={errors.type?.message}
                                            label="Type dropdown"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-4.5">
                                    <Select
                                        options={Sessionenum}
                                        {...register('column')}
                                        error={errors.column?.message}
                                        label="Column dropdown"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <label
                                        // htmlFor='attandence'
                                        className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Is required
                                    </label>
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-1/2">
                                            <Radio
                                                {...register('is_required')}
                                                error={
                                                    errors.is_required?.message
                                                }
                                                label="Yes"
                                                required
                                                name="Is required"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Radio
                                                {...register('is_required')}
                                                error={
                                                    errors.is_required?.message
                                                }
                                                label="No"
                                                required
                                                name="Is required"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-4.5">
                                    <Input
                                        type="text"
                                        placeholder="Options teaxarea"
                                        {...register('options_teaxarea')}
                                        error={errors.options_teaxarea?.message}
                                        label="Options teaxarea"
                                        required
                                    />
                                </div>
                                <div className="w-full mb-4.5">
                                    <label
                                        // htmlFor='attandence'
                                        className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Visble on table
                                    </label>
                                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'visible_on_table',
                                                )}
                                                error={
                                                    errors.visible_on_table
                                                        ?.message
                                                }
                                                label="Yes"
                                                required
                                                name="visible on table"
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <Radio
                                                {...register(
                                                    'visible_on_table',
                                                )}
                                                error={
                                                    errors.visible_on_table
                                                        ?.message
                                                }
                                                label="False"
                                                required
                                                name="visible on table"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        disabled={isSubmitting}>
                                        {isSubmitting
                                            ? 'Loading...'
                                            : 'Add SMS Setting'}
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
                                CustomFields
                            </h3>
                        </div>
                        <CustomFieldsTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default CustomFields
