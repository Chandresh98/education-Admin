import React from 'react'
import Universal from './comp/Universal'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { v4 as uuidv4 } from 'uuid'
export interface data {
    id: string
    name: string
    to: string
}
const data: data[] = [
    {
        id: uuidv4(),
        name: 'Student Report',
        to: '/reports/student-information/student-report',
    },
    {
        id: uuidv4(),
        name: 'Class & Section Report',
        to: '/reports/student-information/class-section-report',
    },
    {
        id: uuidv4(),
        name: 'Guardian Report',
        to: '/reports/student-information/guardian-report',
    },
    {
        id: uuidv4(),
        name: 'Student History',
        to: '/reports/student-information/student-history',
    },
    {
        id: uuidv4(),
        name: 'Student Login Credential',
        to: '/reports/student-information/student-login-credential',
    },
    {
        id: uuidv4(),
        name: 'Class Subject Report',
        to: '/reports/student-information/class-subject-report',
    },
    {
        id: uuidv4(),
        name: 'Admission Report',
        to: '/reports/student-information/admission-report',
    },
    {
        id: uuidv4(),
        name: 'Sibling Report',
        to: '/reports/student-information/sibling-report',
    },
    {
        id: uuidv4(),
        name: 'Student Profile',
        to: '/reports/student-information/student-profile',
    },
    {
        id: uuidv4(),
        name: 'Homework Evaluation Report',
        to: '/reports/student-information/homework-evaluation-report',
    },
    {
        id: uuidv4(),
        name: 'Student Gender Ratio Report',
        to: '/reports/student-information/student-gender-ratio-report',
    },
    {
        id: uuidv4(),
        name: 'Student Teacher Ratio Report',
        to: '/reports/student-information/student-teacher-ratio-report',
    },
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
                                    Student Information Report
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
