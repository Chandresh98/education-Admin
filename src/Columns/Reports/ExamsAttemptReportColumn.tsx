import { ExamsAttemptReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExamsAttemptReportParams>()

export const ExamsAttemptReportColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 50,
    }),
    columnHelpers.accessor('exam', {
        header: 'Exam',
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
    columnHelpers.accessor('exam_publish', {
        header: 'Exam Publish',
        size: 50,
    }),
    columnHelpers.accessor('result_publish', {
        header: 'Result Publish',
        size: 50,
    }),
]
