import { DisableStaffParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<DisableStaffParams>()

export const DisableStaffColumn = [
    columnHelpers.accessor('staff_id', {
        header: ' Staff ID',
        size: 50,
    }),
    columnHelpers.accessor('photo', {
        header: 'Photo',
        size: 50,
    }),
    columnHelpers.accessor('full_name', {
        header: 'Full name',
        size: 50,
    }),
    columnHelpers.accessor('department', {
        header: 'Department',
        size: 50,
    }),
    columnHelpers.accessor('designation', {
        header: ' designation',
        size: 50,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile number',
        size: 50,
    }),
    columnHelpers.accessor('email', {
        header: 'Email',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
