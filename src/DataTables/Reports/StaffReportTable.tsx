'use client'

import axios from '@/lib/axios'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { useEffect, useState } from 'react'

import TableHeader from '@/components/DataTable/Header'
import * as StaffReportColumn from '@/Columns//Reports/StaffReportColumn'
// import { SessionColumn } from '@/Columns/SessionColumn'

export const StaffReportTable = () => {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     const fetchInstituteGroup = async () => {
    //         await axios.post('/api/core/sessions').then(res => {
    //             console.log(res)

    //             setData(res.data.data)
    //         })
    //     }
    //     fetchInstituteGroup()
    // }, [])

    const table = useMaterialReactTable({
        columns: StaffReportColumn.StaffReportColumn,
        data,
        enableRowSelection: true, //enable some features
        enableColumnOrdering: true, //enable a feature for all columns
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        enableColumnActions: true,
        renderTopToolbarCustomActions: () => <TableHeader />,
    })

    return <MaterialReactTable table={table} />
}

export default StaffReportTable
