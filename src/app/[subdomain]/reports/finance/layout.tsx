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
    {
        id: uuidv4(),
        name: 'Balance Fees Statement',
        to: '/reports/finance/balance-fees-statement',
    },
    {
        id: uuidv4(),
        name: 'Daily Collection Report',
        to: '/reports/finance/daily-collection-report',
    },
    {
        id: uuidv4(),
        name: 'Fees Statement',
        to: '/reports/finance/fees-statement',
    },
    {
        id: uuidv4(),
        name: 'Balance Fees Report',
        to: '/reports/finance/balance-fees-report',
    },
    {
        id: uuidv4(),
        name: 'Fees Collectiont Report',
        to: '/reports/finance/fees-collection-report',
    },
    {
        id: uuidv4(),
        name: 'Online Fees Collection Report',
        to: '/reports/finance/online-fees-collection-report',
    },
    {
        id: uuidv4(),
        name: 'Income Report',
        to: '/reports/finance/income-report',
    },
    {
        id: uuidv4(),
        name: 'Expense Report',
        to: '/reports/finance/expense-report',
    },
    {
        id: uuidv4(),
        name: 'Payroll Report',
        to: '/reports/finance/payroll-reports',
    },
    {
        id: uuidv4(),
        name: 'Income Group Report',
        to: '/reports/finance/income-group-report',
    },
    {
        id: uuidv4(),
        name: 'Expense Group Report',
        to: '/reports/finance/expense-group-report',
    },
    {
        id: uuidv4(),
        name: 'Online Admission Fees Collection Report',
        to: '/reports/finance/online-admission-fees-collection-report',
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
                                    Finance{' '}
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
