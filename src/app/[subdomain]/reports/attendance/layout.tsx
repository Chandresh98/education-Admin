import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { v4 as uuidv4 } from 'uuid'
import Universal from '../student-information/comp/Universal'
export interface data {
    id: string
    name: string
    to: string
}
const data: data[] = [
    { id: uuidv4(), name: 'Attendance Report', to: '#' },
    {
        id: uuidv4(),
        name: 'Daily Attendance Report',
        to: '/reports/attendance/daily-attendance',
    },
    {
        id: uuidv4(),
        name: 'Student Attendance Type Report',
        to: '/reports/attendance/student-attendance-type',
    },
    { id: uuidv4(), name: 'Staff Attendance Report', to: '#' },
]
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <DefaultLayout>
                <div className="mb-4.5 gap-6">
                    <div className="w-full ">
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Attendance Report
                                </h3>
                            </div>
                            <div className="grid grid-cols-3">
                                <Universal data={data} />
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </DefaultLayout>
        </section>
    )
}
