import { IncomeReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<IncomeReportParams>()

export const IncomeReportColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('invoice_number', {
        header: 'Invoice Number',
        size: 50,
    }),
    columnHelpers.accessor('income_head', {
        header: 'Income Head',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 50,
    }),
]
