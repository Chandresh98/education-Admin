import { BookCategoryParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BookCategoryParams>()

export const BookCategoryColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
