import { PayrollParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PayrollParams>()

export const PayrollColumn = [
    columnHelpers.accessor('staff_id', {
        header: 'Staff ID',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('role', {
        header: 'Role',
        size: 50,
    }),
    columnHelpers.accessor('department', {
        header: 'Department',
        size: 50,
    }),
    columnHelpers.accessor('designation', {
        header: 'Designation',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
