import { SiblingReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SiblingReportParams>()

export const SiblingReportColumn = [
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 200,
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
        size: 200,
    }),
    columnHelpers.accessor('guardian_name', {
        header: 'Guardian Name',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name (Sibling)',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('admission_date', {
        header: 'Admission Date',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 200,
    }),
]
