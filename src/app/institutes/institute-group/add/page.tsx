'use client'
import { InstituteGroupForm, instituteGroupTypeOption } from '@/Schemas/Schema'
import CheckBox from '@/components/Forms/CheckBox'
import DragDropFile from '@/components/Forms/DragDropFile'
import Input from '@/components/Forms/Input'
import Select from '@/components/Forms/Select'
import TextArea from '@/components/Forms/TextArea'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import axios from '@/lib/axios'
import { InstituteGroupParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const AddInstituteGroup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<InstituteGroupParams>({
        resolver: zodResolver(InstituteGroupForm, {}, { raw: true }),
    })
    const [logo, setLogo] = useState<string>('')
    const [logoSmall, setLogoSmall] = useState<string>('')
    const [favIcon, setFavIcon] = useState<string>('')

    const onSubmit: SubmitHandler<InstituteGroupParams> = async (
        data: InstituteGroupParams,
    ) => {
        const formData = new FormData()

        for (const field of Object.keys(data) as Array<keyof typeof data>) {
            formData.append(`${field}`, `${data[field]}`)
        }

        axios.post('/api/institute-group/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    return (
        <DefaultLayout>
            {/* <Main> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Add Institute Group
                    </h3>
                </div>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-6.5">
                        <div className="w-full mb-4.5">
                            <Input
                                type="text"
                                placeholder="Name of the Institute Group"
                                {...register('name')}
                                error={errors.name?.message}
                                label="Enter Your Group Name"
                                required
                            />
                        </div>
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Input
                                    label="Code"
                                    {...register('code')}
                                    error={errors.code?.message}
                                    placeholder="Enter Group Code"
                                />
                            </div>
                            <div className="w-full xl:w-7/8">
                                <Input
                                    type="text"
                                    placeholder="Sub Domain Name"
                                    {...register('domain')}
                                    error={errors.domain?.message}
                                    label="Enter Your Sub Domain"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <TextArea
                                    {...register('description')}
                                    error={errors.description?.message}
                                    label="Description"
                                    placeholder="Write description of the Group"
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <TextArea
                                    {...register('about')}
                                    error={errors.about?.message}
                                    label="About"
                                    placeholder="Write About the Group"
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="text"
                                    label="Address"
                                    {...register('address')}
                                    error={errors.address?.message}
                                    placeholder="Enter Your Address"
                                    required
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="text"
                                    label="City"
                                    {...register('city')}
                                    error={errors.city?.message}
                                    placeholder="Enter Your City"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="text"
                                    label="State"
                                    {...register('state')}
                                    error={errors.state?.message}
                                    placeholder="Enter Your State"
                                    required
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="number"
                                    label="Pincode"
                                    {...register('pincode')}
                                    error={errors.pincode?.message}
                                    placeholder="Enter Your Pincode"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="email"
                                    label="Email"
                                    {...register('email')}
                                    error={errors.email?.message}
                                    placeholder="Enter Email"
                                    required
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <Input
                                    type="text"
                                    label="Phone Number"
                                    {...register('phone')}
                                    error={errors.phone?.message}
                                    placeholder="Enter Phone Number"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/3">
                                <Input
                                    type="text"
                                    label="Contact Person Name"
                                    {...register('contact_person_name')}
                                    error={errors.contact_person_name?.message}
                                    placeholder="Enter Contact Person Name"
                                    required
                                />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <Input
                                    type="text"
                                    label="Contact Person Number"
                                    {...register('contact_person_phone')}
                                    error={errors.contact_person_phone?.message}
                                    placeholder="Enter Contact Person Number"
                                    required
                                />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <Input
                                    type="text"
                                    label="Contact Person Email"
                                    {...register('contact_person_email')}
                                    error={errors.contact_person_email?.message}
                                    placeholder="Enter Contact Person Email"
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/3">
                                <Input
                                    type="url"
                                    label="Website"
                                    {...register('website_url')}
                                    error={errors.website_url?.message}
                                    placeholder="Enter Your Website"
                                />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <Input
                                    type="number"
                                    label="Established Year"
                                    {...register('established_year')}
                                    error={errors.established_year?.message}
                                    placeholder="Enter Established Year"
                                />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <Select
                                    {...register('type')}
                                    error={errors.type?.message}
                                    label="Select Type Of Group"
                                    options={instituteGroupTypeOption}
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/3">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Logo
                                </label>
                                <DragDropFile file={logo} setFile={setLogo} />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Logo Small
                                </label>
                                <DragDropFile
                                    file={logoSmall}
                                    setFile={setLogoSmall}
                                />
                            </div>

                            <div className="w-full xl:w-1/3">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Fav Icon
                                </label>
                                <DragDropFile
                                    file={favIcon}
                                    setFile={setFavIcon}
                                />
                            </div>
                        </div>

                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <Input
                                    label="Password"
                                    type="password"
                                    {...register('password')}
                                    error={errors.password?.message}
                                    placeholder="Enter Your Password"
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <Input
                                    label="Confirm Password"
                                    type="password"
                                    {...register('confirm_password')}
                                    error={errors.confirm_password?.message}
                                    placeholder="Re-Type Your Password"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <button
                                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                disabled={isSubmitting}>
                                {isSubmitting
                                    ? 'Loading...'
                                    : 'Add Institute Group'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* </Main> */}
        </DefaultLayout>
    )
}

export default AddInstituteGroup
