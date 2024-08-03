import { UserStaffParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<UserStaffParams>()

export const UserStaffColumn = [
    columnHelpers.accessor('staff_id', {
        header: ' Staff ID',
        size: 50,
    }),
    columnHelpers.accessor('name',{
        header: "Name",
        size: 50,
    }),
    columnHelpers.accessor('role',{
        header: "Role",  
        size: 50,
    }),
    columnHelpers.accessor('designation',{
        header: "Designation",  
        size: 200,
    }),
    columnHelpers.accessor('department',{
        header: "Department",  
        size: 50,
    }),
    
]