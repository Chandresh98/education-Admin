import { useState, useRef, useEffect } from 'react'
import { SliderForm } from '@/Schemas/Schema'
import Input from '@/components/Forms/Input'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { useToast } from '@/hooks/toast'
import axios from '@/lib/axios'
import { SliderParams } from '@/types/FormType'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'primereact/button'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import Select from '@/components/Forms/Select'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFolderOpen,
    faTrashCan,
    faPlus,
    faMinus,
} from '@fortawesome/free-solid-svg-icons'

const Slider = ({ title, Component }: { title: any; Component: any }) => {
    const [slider, setSlider] = useState<boolean>(true)
    const sliderCont = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (sliderCont.current) {
            sliderCont.current.style.height = slider
                ? sliderCont.current.scrollHeight + 'px'
                : '0'
        }
    }, [slider])

    function toggleSlider() {
        setSlider(!slider)
    }

    return (
        <div className="border-t-2 border-indigo-500 bg-white dark:bg-strokedark">
            <div className="flex flex-row justify-between items-center px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    {title}
                </h3>
                <div
                    className="text-2xl cursor-pointer flex"
                    onClick={toggleSlider}>
                    {slider ? (
                        <FontAwesomeIcon icon={faMinus} size="xs" />
                    ) : (
                        <FontAwesomeIcon icon={faPlus} size="xs" />
                    )}
                </div>
            </div>

            <div className="p-6.5">
                <div
                    ref={sliderCont}
                    className=" bg-white overflow-hidden transition-all duration-500  text-black  dark:bg-strokedark dark:text-white ">
                    {<Component />}
                </div>
            </div>
        </div>
    )
}

export const SeoDetails = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SliderParams>({
        resolver: zodResolver(SliderForm, {}, { raw: true }),
    })

    const router = useRouter()
    const { ToastError, ToastSuccess } = useToast()

    const onSubmit: SubmitHandler<SliderParams> = async (
        data: SliderParams,
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
        <div className="mb-4.5  gap-6 ">
            <div className="w-full ">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-4.5">
                        <Input
                            type="text"
                            placeholder="Enter Meta Title"
                            {...register('meta_title')}
                            error={errors.meta_title?.message}
                            label="Meta Title"
                            required
                        />
                    </div>
                    <div className="w-full mb-4.5">
                        <Input
                            type="text"
                            placeholder="Enter Meta Keyword"
                            {...register('meta_keyword')}
                            error={errors.meta_keyword?.message}
                            label="Meta Keyword"
                            required
                        />
                    </div>
                    <div className="w-full mb-4.5">
                        <Input
                            type="text"
                            placeholder="Enter Meta Description"
                            {...register('meta_description')}
                            error={errors.meta_description?.message}
                            label="Meta Description"
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export const SidebarSetting = () => {
    return (
        <div className="w-full">
            <div className=" flex justify-between px-4.5 py-4 -ml-3">
                <h3>Sidebar Setting</h3>
                <label className="relative inline-block w-14 h-8">
                    <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
                    <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-200 transition duration-300 ease-in-out rounded-full peer-checked:bg-blue-500 peer-focus:shadow-outline"></span>
                    <span className="absolute left-1 bottom-1 bg-white h-6 w-6 rounded-full transition-transform duration-300 ease-in-out peer-checked:transform peer-checked:translate-x-6"></span>
                </label>
            </div>
        </div>
    )
}
export const FeaturedImages = () => {
    return (
        <>
            <div className="w-full ">
                <div className="flex  border-stroke  dark:border-strokedark items-center ">
                    <div className="w-full h-14 mb-4.5">
                        <Input
                            type="text"
                            placeholder="Select Image"
                            label=""
                        />
                    </div>
                    <label
                        className="rounded h-13 bg-primary p-3 font-medium text-gray hover:bg-opacity-90 border border-stroke dark:border-strokedark flex items-center cursor-pointer"
                        htmlFor="file-upload">
                        <FontAwesomeIcon icon={faFolderOpen} />
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={e => {}}
                        />
                    </label>
                    <button className="rounded h-13 w-11 bg-slate-500 p-3 font-medium text-gray hover:bg-opacity-90 border border-stroke dark:border-strokedark">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Slider
