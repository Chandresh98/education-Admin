import { IssueItemReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<IssueItemReportParams>()

export const IssueItemReportColumn = [
    columnHelpers.accessor('item', {
        header: 'Item',
        size: 200,
    }),
    columnHelpers.accessor('item_category', {
        header: 'Item Category',
        size: 200,
    }),
    columnHelpers.accessor('issue_return', {
        header: 'Issue - Return',
        size: 200,
    }),
    columnHelpers.accessor('issue_to', {
        header: 'Issue To',
        size: 200,
    }),
    columnHelpers.accessor('issued_by', {
        header: 'Issued By',
        size: 200,
    }),
    columnHelpers.accessor('quantity', {
        header: 'Quantity',
        size: 200,
    }),
]
