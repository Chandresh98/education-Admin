import { ExamScheduleParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExamScheduleParams>()

export const ExamScheduleColumn = [
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('start_time', {
        header: ' Start Time',
        size: 50,
    }),
    columnHelpers.accessor('end_time', {
        header: 'End Time',
        size: 50,
    }),
    columnHelpers.accessor('max_practical_marks', {
        header: ' Max Practical Marks',
        size: 50,
    }),
    columnHelpers.accessor('max_theory_marks', {
        header: ' Max Theory Marks',
        size: 50,
    }),
    columnHelpers.accessor('min_practical_marks', {
        header: ' Min Practical Marks',
        size: 50,
    }),
    columnHelpers.accessor('min_theory_marks', {
        header: ' Min Theory Marks',
        size: 50,
    }),
]
