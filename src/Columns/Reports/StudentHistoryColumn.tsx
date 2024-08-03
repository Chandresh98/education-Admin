import { StudentHistoryParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentHistoryParams>()

export const StudentHistoryColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 200,
    }),
    columnHelpers.accessor('admission_date', {
        header: 'Admission Date',
        size: 200,
    }),
    columnHelpers.accessor('class_start_end', {
        header: 'Class (Start - End)',
        size: 200,
    }),
    columnHelpers.accessor('session_start_end', {
        header: 'Session (Start - End)',
        size: 200,
    }),
    columnHelpers.accessor('year', {
        header: 'Year',
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
    columnHelpers.accessor('guardian_phone', {
        header: 'Guardian Phone',
        size: 200,
    }),
]
