import { FeesCollectionReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<FeesCollectionReportParams>()

export const FeesCollectionReportColumn = [
    columnHelpers.accessor('payment_id', {
        header: 'Payment ID',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('fees_type', {
        header: 'Fees Type',
        size: 200,
    }),
    columnHelpers.accessor('collect_by', {
        header: 'Collect By',
        size: 200,
    }),
    columnHelpers.accessor('mode', {
        header: 'Mode',
        size: 200,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
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
    columnHelpers.accessor('total', {
        header: 'Total',
        size: 200,
    }),
]
