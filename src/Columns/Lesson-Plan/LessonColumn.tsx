import { LessonParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<LessonParams>()

export const LessonColumn = [
    columnHelpers.accessor('class', {
        header: ' Class',
        size: 50,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
    }),
    columnHelpers.accessor('subject_group', {
        header: 'Subject Group',
    }),
    columnHelpers.accessor('subject', {
        header: 'Subject',
    }),
    columnHelpers.accessor('lesson_name', {
        header: 'Lesson Name',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
