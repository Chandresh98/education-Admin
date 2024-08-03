import { DailyCollectionReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<DailyCollectionReportParams>()

export const DailyCollectionReportColumn = [
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('total_transactions', {
        header: 'Total Transactions',
        size: 200,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
