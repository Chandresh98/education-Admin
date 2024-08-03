import { PostalDispatchParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PostalDispatchParams>()

export const PostalDispatchColumn = [
    columnHelpers.accessor('to_title', {
        header: 'To Title',
        size: 50,
    }),
    columnHelpers.accessor('reference_no', {
        header: 'Reference No',
        size: 50,
    }),
    columnHelpers.accessor('from_title', {
        header: 'From Title',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
