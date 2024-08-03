import { VisitorBookParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VisitorBookParams>()

export const VisitorBookColumn = [
    columnHelpers.accessor('purpose', {
        header: 'Purpose',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('in_time', {
        header: ' In Time',
        size: 50,
    }),
    columnHelpers.accessor('out_time', {
        header: 'Out Time',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
