import { HomeworkEvaluationReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HomeworkEvaluationReportParams>()

export const HomeworkEvaluationReportColumn = [
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 200,
    }),
    columnHelpers.accessor('homework_date', {
        header: 'Homework Date',
        size: 200,
    }),
    columnHelpers.accessor('submission_date', {
        header: 'Submission Date',
        size: 200,
    }),
    columnHelpers.accessor('complete_incomplete', {
        header: 'Complete / Incomplete',
        size: 200,
    }),
    columnHelpers.accessor('complete', {
        header: 'Complete %',
        size: 200,
    }),
]
