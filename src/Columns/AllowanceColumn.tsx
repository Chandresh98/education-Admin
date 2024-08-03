import { AllowanceParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AllowanceParams>()

export const AllowanceColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]