import { TopicParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TopicParams>()

export const TopicColumn = [
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
    columnHelpers.accessor('lesson', {
        header: 'Lesson',
    }),
    columnHelpers.accessor('topic_name', {
        header: 'Topic Name',
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
