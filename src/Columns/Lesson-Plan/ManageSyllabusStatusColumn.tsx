import { ManageSyllabusStatusParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ManageSyllabusStatusParams>()

export const ManageSyllabusStatusColumn = [
    columnHelpers.accessor('lesson_topic', {
        header: ' Lesson Topic',
        size: 50,
    }),
    columnHelpers.accessor('topic_completion_date', {
        header: 'Topic Completion Date',
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
