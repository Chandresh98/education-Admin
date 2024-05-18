'use client'

import { InstituteGroupColumn } from '@/Columns/InstituteGroupColumn'
import axios from '@/lib/axios'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import { useEffect, useState } from 'react'

import TableHeader from '@/components/DataTable/Header'

export const InstituteGroupTable = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchInstituteGroup = async () => {
            await axios.post('/api/institute-group').then(res => {
                setData(res.data)
            })
        }
        fetchInstituteGroup()
    }, [])

    const table = useMaterialReactTable({
        columns: InstituteGroupColumn,
        data,
        enableRowSelection: true, //enable some features
        enableColumnOrdering: true, //enable a feature for all columns
        enableGlobalFilter: false,
        paginationDisplayMode: 'pages',
        renderTopToolbarCustomActions: () => <TableHeader />,
    })

    return <MaterialReactTable table={table} />
}
