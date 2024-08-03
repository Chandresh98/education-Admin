import { StudyMaterialParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudyMaterialParams>()

export const StudyMaterialColumn = [
    columnHelpers.accessor('content_title', {
        header: 'Content Title',
        size: 50,
    }),
    columnHelpers.accessor('type', {
        header: 'Type',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('available_for', {
        header: ' Available For',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
