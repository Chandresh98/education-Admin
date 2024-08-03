import { BookInventoryReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BookInventoryReportParams>()

export const BookInventoryReportColumn = [
    columnHelpers.accessor('book_title', {
        header: 'Book Title',
        size: 200,
    }),
    columnHelpers.accessor('book_number', {
        header: 'Book Number',
        size: 200,
    }),
    columnHelpers.accessor('isbn_number', {
        header: 'ISBN Number',
        size: 200,
    }),
    columnHelpers.accessor('publisher', {
        header: 'Publisher',
        size: 200,
    }),
    columnHelpers.accessor('author', {
        header: 'Author',
        size: 200,
    }),
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 200,
    }),
    columnHelpers.accessor('rack_number', {
        header: 'Rack Number',
        size: 200,
    }),
    columnHelpers.accessor('qty', {
        header: 'QTY',
        size: 200,
    }),
    columnHelpers.accessor('available', {
        header: 'Available',
        size: 200,
    }),
    columnHelpers.accessor('issued', {
        header: 'Issued',
        size: 200,
    }),
    columnHelpers.accessor('book_price', {
        header: 'Book Price',
        size: 200,
    }),
    columnHelpers.accessor('post_date', {
        header: 'Post Date',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
