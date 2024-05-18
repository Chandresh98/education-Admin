import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'

const Sections = () => {
    return (
        <DefaultLayout>
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Section
                            </h3>
                        </div>
                        <form action="">
                            <div className="pb-6.5">
                                <div className="w-full mb-4.5">
                                    {/* <Input
                                        type="text"
                                        placeholder="Name of the Institute Group"
                                        {...register('name')}
                                        error={errors.name?.message}
                                        label="Enter Your Group Name"
                                        required
                                    /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full 2xl:w-1/2">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Add Institute Group
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Sections
