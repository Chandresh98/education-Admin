import { AddItemParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AddItemParams>()

export const AddItemColumn = [
    columnHelpers.accessor('item', {
        header: ' Item',
        size: 50,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
    }),
    columnHelpers.accessor('unit', {
        header: 'Unit',
    }),
    columnHelpers.accessor('available_quantity', {
        header: 'Available Quantity',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
