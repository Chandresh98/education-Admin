import {  PromoteStudentParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper <PromoteStudentParams>()

export const PromoteStudentColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 200,
    }),
    columnHelpers.accessor('father_name', {
        header: ' Father Name',
        size: 200,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date of Birth',
        size: 200,
    }),
    columnHelpers.accessor('current_result', {
        header: 'Current Result',
        size: 200,
    }),
    columnHelpers.accessor('next_session_status', {
        header: 'Next Session Status',
        size: 200,
    })
]