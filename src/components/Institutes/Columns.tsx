'use client'

import { InstituteGroup } from '@/types/institute'
import { ColumnDef } from '@tanstack/react-table'

export const Columns: ColumnDef<InstituteGroup>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
]
