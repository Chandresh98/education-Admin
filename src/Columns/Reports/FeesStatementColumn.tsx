import { FeesStatementParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<FeesStatementParams>()

export const FeesStatementColumn = [
    columnHelpers.accessor('fees_group', {
        header: 'Fees Group',
        size: 200,
    }),
    columnHelpers.accessor('fees_code', {
        header: 'Fees Code',
        size: 200,
    }),
    columnHelpers.accessor('due_date', {
        header: 'Due Date',
        size: 200,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
        size: 200,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 200,
    }),
    columnHelpers.accessor('payment_id', {
        header: 'Payment ID',
        size: 200,
    }),
    columnHelpers.accessor('mode', {
        header: 'Mode',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('discount', {
        header: 'Discount',
        size: 200,
    }),
    columnHelpers.accessor('fine', {
        header: 'Fine',
        size: 200,
    }),
    columnHelpers.accessor('paid', {
        header: 'Paid',
        size: 200,
    }),
    columnHelpers.accessor('balance', {
        header: 'Balance',
        size: 200,
    }),
]
