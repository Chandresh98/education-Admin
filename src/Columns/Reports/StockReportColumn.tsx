import { StockReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StockReportParams>()

export const StockReportColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
        size: 200,
    }),
    columnHelpers.accessor('supplier', {
        header: 'Supplier',
        size: 200,
    }),
    columnHelpers.accessor('store', {
        header: 'Store',
        size: 200,
    }),
    columnHelpers.accessor('available_quantity', {
        header: 'Available Quantity',
        size: 200,
    }),
    columnHelpers.accessor('total_quantity', {
        header: 'Total Quantity',
        size: 200,
    }),
    columnHelpers.accessor('total_issued', {
        header: 'Total Issued',
        size: 200,
    }),
]
