'use client'

import axios from '@/lib/axios'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { useEffect, useState } from 'react'

import TableHeader from '@/components/DataTable/Header'
import * as NewsColumn from '@/Columns/Front-CMS/NewsColumn'
export const NewsTable = () => {
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
        columns: NewsColumn.NewsColumn,
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

export default NewsTable
