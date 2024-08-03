import { ExpenseReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExpenseReportParams>()

export const ExpenseReportColumn = [
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('expense_head', {
        header: 'Expense Head',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('invoice_number', {
        header: 'Invoice Number',
        size: 50,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 50,
    }),
]
