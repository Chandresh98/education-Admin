import { ExpenseGroupReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExpenseGroupReportParams>()

export const ExpenseGroupReportColumn = [
    columnHelpers.accessor('expense_head', {
        header: 'Expense Head',
        size: 200,
    }),
    columnHelpers.accessor('expense_id', {
        header: 'Expense ID',
        size: 200,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('invoice_number', {
        header: 'Invoice Number',
        size: 200,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 200,
    }),
]
