import { ExpenseParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExpenseParams>()

export const ExpenseColumn = [
    columnHelpers.accessor('expense_type', {
        header: 'expense Type',
        size: 50,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('created_by', {
        header: 'Created By',
        size: 50,
    }),
    columnHelpers.accessor('updated_by', {
        header: ' Updated by',
        size: 50,
    }) 
]
