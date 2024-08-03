import { ExamsReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExamsReportParams>()

export const ExamsReportColumn = [
    columnHelpers.accessor('exam', {
        header: 'Exam',
        size: 50,
    }),
    columnHelpers.accessor('attempt', {
        header: 'Attempt',
        size: 50,
    }),
    columnHelpers.accessor('exam_from', {
        header: 'Exam From',
        size: 50,
    }),
    columnHelpers.accessor('exam_to', {
        header: 'Exam To',
        size: 50,
    }),
    columnHelpers.accessor('duration', {
        header: 'Duration',
        size: 50,
    }),
    columnHelpers.accessor('student', {
        header: 'Student',
        size: 50,
    }),
    columnHelpers.accessor('questions', {
        header: 'Questions',
        size: 50,
    }),
    columnHelpers.accessor('exam_publish', {
        header: 'Exam Publish',
        size: 50,
    }),
    columnHelpers.accessor('result_publish', {
        header: 'Result Publish',
        size: 50,
    }),
]
