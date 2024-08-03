import { RoleParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<RoleParams>()

export const RoleColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('type', {
        header: 'Types',
        size: 200,
    }),
]
