import { SourceParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SourceParams>()

export const SourceColumn = [
    columnHelpers.accessor('source', {
        header: 'Source',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
