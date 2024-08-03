import { AddItemStockParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AddItemStockParams>()

export const AddItemStockColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
    }),
    columnHelpers.accessor('supplier', {
        header: 'Supplier',
    }),
    columnHelpers.accessor('store', {
        header: 'Store',
    }),
    columnHelpers.accessor('quantity', {
        header: 'Quantity',
    }),
    columnHelpers.accessor('purchase_price', {
        header: 'Purchase Price',
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
