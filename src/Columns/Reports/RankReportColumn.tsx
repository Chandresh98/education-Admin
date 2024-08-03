import { RankReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<RankReportParams>()

export const RankReportColumn = [
    columnHelpers.accessor('rank', {
        header: 'Rank',
        size: 50,
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('roll_number', {
        header: 'Roll Number',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Attempt',
        size: 50,
    }),
    columnHelpers.accessor('kannada', {
        header: 'Kannada (8.00/25.00 - KAN)',
        size: 50,
    }),
    columnHelpers.accessor('grand_total', {
        header: 'Grand Total',
        size: 50,
    }),
    columnHelpers.accessor('percent', {
        header: 'Percent (%)',
        size: 50,
    }),
    columnHelpers.accessor('result', {
        header: 'Result',
        size: 50,
    }),
]
