'use client'

import DefaultLayout from '@/components/Layouts/DefaultLayout'
import { InstituteGroupTable } from '@/DataTables/InstituteGroupTable'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'

const InstituteGroup = () => {
    return (
        <DefaultLayout>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark flex justify-between">
                    <h3 className="font-medium text-black dark:text-white">
                        Add Institute Group
                    </h3>
                    <div>
                        <Link href="/institutes/institute-group/add">
                            <AddIcon /> Add Institute Group
                        </Link>
                    </div>
                </div>

                <InstituteGroupTable />
            </div>
        </DefaultLayout>
    )
}

export default InstituteGroup
