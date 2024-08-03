import { GuardianReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<GuardianReportParams>()

export const GuardianReportColumn = [
    columnHelpers.accessor('class_section', {
        header: 'Class (Section)',
        size: 200,
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 200,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 200,
    }),
    columnHelpers.accessor('guardian_name', {
        header: 'Guardian Name',
        size: 200,
    }),
    columnHelpers.accessor('guardian_relation', {
        header: 'Guardian Releation',
        size: 200,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Fahter Name',
        size: 200,
    }),
    columnHelpers.accessor('father_phone', {
        header: 'Father Phone',
        size: 200,
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
        size: 200,
    }),
    columnHelpers.accessor('mother_phone', {
        header: 'Mother Phone',
        size: 200,
    }),
]
