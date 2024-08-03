import { ExamParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExamParams>()

export const ExamColumn = [ 
    columnHelpers.accessor('term', {
        header: 'Term',
        size: 50,
    }),columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('maximum_mark', {
        header: 'maximum_mark',
        size: 50,
    }),
    columnHelpers.accessor('practical', {
        header: ' Practical',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
