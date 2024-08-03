import { MenuParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<MenuParams>()

export const MenuColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
