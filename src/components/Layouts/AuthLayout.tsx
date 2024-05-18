import Link from 'next/link'
import SidePane from '../Auth/SidePane'
import { Children } from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
                <SidePane />
                <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
