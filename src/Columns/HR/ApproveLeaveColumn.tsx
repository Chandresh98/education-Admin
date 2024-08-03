import { ApproveLeaveParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ApproveLeaveParams>()

export const ApproveLeaveColumn = [
    columnHelpers.accessor('staff', {
        header: ' Staff',
        size: 50,
    }),
    columnHelpers.accessor('leave_type', {
        header: 'Leave_type',
        size: 50,
    }),
    columnHelpers.accessor('from_date', {
        header: 'From Date',
        size: 50,
    }),
    columnHelpers.accessor('to_date', {
        header: 'To date',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: ' Date',
        size: 50,
    }),
    columnHelpers.accessor('leave_status', {
        header: ' Leave Status',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
