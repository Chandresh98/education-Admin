import { TermParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TermParams>()

export const TermColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
