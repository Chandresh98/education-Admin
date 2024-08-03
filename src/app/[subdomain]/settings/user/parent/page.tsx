'use client'
import UserParentTable from '@/DataTables/User/UserParentTable'
import UserStaffTable from '@/DataTables/UserStaffTable'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function page() {
    const router = useRouter()
    const pathName = usePathname()
    return (
        <DefaultLayout>
            <div className="mb-4.5 ">
                <div className="w-full 2xl:w-1/1 ">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-3 dark:border-strokedark  flex justify-between">
                            <h3 className="font-medium text-black dark:text-white p-2">
                                User
                            </h3>
                            <div>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/student'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/student')
                                    }>
                                    Student
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/staff'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/staff')
                                    }>
                                    Staff
                                </button>
                                <button
                                    className={`text-blue-700 font-bold  px-6 py-3 mx-4 ${
                                        pathName === '/settings/user/parent'
                                            ? 'border-b-2  border-blue-700'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        router.push('/settings/user/parent')
                                    }>
                                    Parent
                                </button>
                            </div>
                        </div>
                        <UserParentTable />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default page
