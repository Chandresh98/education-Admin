import { BookParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BookParams>()

export const BookColumn = [
    columnHelpers.accessor('book_category', {
        header: 'Book Category',
        size: 50,
    }),
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 50,
    }),
    columnHelpers.accessor('language', {
        header: 'Language',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),columnHelpers.accessor('isbn_no', {
        header: 'ISBN No',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
