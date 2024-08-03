'use client'

import { SessionParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SessionParams>()

export const SessionColumn = [
    columnHelpers.accessor('name', {
        header: 'Session Name',
        size: 200,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    }),
]
