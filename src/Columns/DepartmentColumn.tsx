import { DepartmentParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<DepartmentParams>()
export const DepartmentColumn = [
    columnHelpers.accessor('name',{
        header: ' Name',
        size: 50,
    })
    // columnHelpers.accessor('status', {
        // header: 'Status',
    // })   
    
]