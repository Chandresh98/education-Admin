import { BudgetParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BudgetParams>()

export const BudgetColumn = [
    columnHelpers.accessor('budget_type', {
        header: 'Budget Type',
        size: 50,
    }),
    columnHelpers.accessor('department', {
        header: 'Department',
        size: 50,
    }),
    columnHelpers.accessor('amount_allocated', {
        header: 'Amount Allocated',
        size: 50,
    }),
    columnHelpers.accessor('amount_spent', {
        header: 'Amount Spent',
        size: 50,
    }),
    columnHelpers.accessor('amount_remaining', {
        header: ' Amount remaining',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
