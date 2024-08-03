import { ComplainTypeParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ComplainTypeParams>()

export const ComplainTypeColumn = [
    columnHelpers.accessor('complain_type', {
        header: 'Complain Type',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
