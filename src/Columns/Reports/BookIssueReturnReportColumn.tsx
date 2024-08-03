import { BookIssueReturnReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BookIssueReturnReportParams>()

export const BookIssueReturnReportColumn = [
    columnHelpers.accessor('book_title', {
        header: 'Book Title',
        size: 200,
    }),
    columnHelpers.accessor('book_number', {
        header: 'Book Number',
        size: 200,
    }),
    columnHelpers.accessor('issue_date', {
        header: 'Issue Date',
        size: 200,
    }),
    columnHelpers.accessor('return_date', {
        header: 'Return Date',
        size: 200,
    }),
    columnHelpers.accessor('member_id', {
        header: 'Member ID',
        size: 200,
    }),
    columnHelpers.accessor('library_card_no', {
        header: 'Library Card No.',
        size: 200,
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('issue_by', {
        header: 'Issue By',
        size: 200,
    }),
    columnHelpers.accessor('members_type', {
        header: 'Memebr Type',
        size: 200,
    }),
]
