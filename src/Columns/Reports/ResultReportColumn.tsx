import { ResultReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ResultReportParams>()

export const ResultReportColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'admission_no',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Attempt',
        size: 50,
    }),
    columnHelpers.accessor('total_attempt', {
        header: 'Exam From',
        size: 50,
    }),
    columnHelpers.accessor('remaining_attempt', {
        header: 'Remaining Attempt',
        size: 50,
    }),
    columnHelpers.accessor('exam_submitted', {
        header: 'Exam Submitted',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    }),
]
