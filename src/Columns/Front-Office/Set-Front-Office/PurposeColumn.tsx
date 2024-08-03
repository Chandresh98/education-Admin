import { PurposeParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PurposeParams>()

export const PurposeColumn = [
    columnHelpers.accessor('purpose', {
        header: 'Purpose',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
