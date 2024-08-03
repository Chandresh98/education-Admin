import { UserParentParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<UserParentParams>()

export const UserParentColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: ' Phone',
        size: 50,
    }),
    columnHelpers.accessor('address', {
        header: ' Address',
        size: 50,
    }),
    columnHelpers.accessor('actions', {
        header: ' Actions',
        size: 50,
    }),
    columnHelpers.accessor('update', {
        header: 'Update',
    })   
    
]