import { AddItemReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AddItemReportParams>()

export const AddItemReportColumn = [
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
    columnHelpers.accessor('quantity', {
        header: 'Quantity',
        size: 200,
    }),

    columnHelpers.accessor('purchase_price', {
        header: 'Purchase Price',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
]
