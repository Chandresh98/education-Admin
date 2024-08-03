import { SubjectLessonPlanReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SubjectLessonPlanReportParams>()

export const SubjectLessonPlanReportColumn = [
    columnHelpers.accessor('teacher', {
        header: 'Teacher',
        size: 200,
    }),
    columnHelpers.accessor('lesson_name', {
        header: 'Lesson Name',
        size: 200,
    }),
    columnHelpers.accessor('topic_name', {
        header: 'Topic Name',
        size: 200,
    }),
    columnHelpers.accessor('sub_topic', {
        header: 'Sub Topic',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('time_from', {
        header: 'Time Form',
        size: 200,
    }),
    columnHelpers.accessor('time_to', {
        header: 'Time To',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
