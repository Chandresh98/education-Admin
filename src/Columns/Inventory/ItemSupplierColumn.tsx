import { ItemSupplierParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ItemSupplierParams>()

export const ItemSupplierColumn = [
    columnHelpers.accessor('item_supplier', {
        header: ' Item Supplier',
        size: 50,
    }),
    columnHelpers.accessor('contact_person', {
        header: 'Contact Person',
    }),
    columnHelpers.accessor('address', {
        header: 'Address',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
