import { ReferenceParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ReferenceParams>()

export const ReferenceColumn = [
    columnHelpers.accessor('reference', {
        header: 'Reference',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
