import {  LeaveTypesParams, RoleParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<LeaveTypesParams>()

export const LeaveTypesColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('status',{ 
        header: "Status",
        size: 200,
    }),
]