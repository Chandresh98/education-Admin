import { ItemCategoryParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ItemCategoryParams>()

export const ItemCategoryColumn = [
    columnHelpers.accessor('item_category', {
        header: ' Item Category',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
