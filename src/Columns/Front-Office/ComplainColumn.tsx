import { ComplainParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ComplainParams>()

export const ComplainColumn = [
    columnHelpers.accessor('complain', {
        header: 'Complain',
        size: 50,
    }),
    columnHelpers.accessor('complain_type', {
        header: 'Complain Type',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: ' Date',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
