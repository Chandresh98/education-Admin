import { ItemStoreParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ItemStoreParams>()

export const ItemStoreColumn = [
    columnHelpers.accessor('item_store_name', {
        header: ' Item Store Name',
        size: 50,
    }),
    columnHelpers.accessor('item_stock_code', {
        header: 'Item Stock Code',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
