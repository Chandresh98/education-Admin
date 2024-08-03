import { IncomeGroupReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<IncomeGroupReportParams>()

export const IncomeGroupReportColumn = [
    columnHelpers.accessor('income_head', {
        header: 'Income Head',
        size: 200,
    }),
    columnHelpers.accessor('income_id', {
        header: 'Income ID',
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
