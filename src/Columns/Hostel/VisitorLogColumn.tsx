import { VisitorLogParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VisitorLogParams>()

export const VisitorLogColumn = [
    columnHelpers.accessor('hostel', {
        header: ' Hostel',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile number',
        size: 50,
    }),
    columnHelpers.accessor('purpose', {
        header: 'Purpose',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: ' Date',
        size: 50,
    }),
    columnHelpers.accessor('in_time', {
        header: 'In time',
        size: 50,
    }),
    columnHelpers.accessor('out_time', {
        header: 'Out time',
        size: 50,
    })

]
