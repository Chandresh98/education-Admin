import { BalanceFeesReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BalanceFeesReportParams>()

export const BalanceFeesReportColumn = [
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('roll_number', {
        header: 'Roll Number',
        size: 200,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Fatehr Name',
        size: 200,
    }),
    columnHelpers.accessor('total_fees', {
        header: 'Total Fees',
        size: 200,
    }),
    columnHelpers.accessor('paid_fees', {
        header: 'Paid_fees',
        size: 200,
    }),

    columnHelpers.accessor('discount', {
        header: 'Discount',
        size: 200,
    }),
    columnHelpers.accessor('fine', {
        header: 'Fine',
        size: 200,
    }),
    columnHelpers.accessor('balance', {
        header: 'Balance',
        size: 200,
    }),
]
