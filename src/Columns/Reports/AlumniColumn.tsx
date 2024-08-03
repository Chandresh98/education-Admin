import { AlumniParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AlumniParams>()

export const AlumniColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('gender', {
        header: ' Gender',
        size: 50,
    }),
    columnHelpers.accessor('current_email', {
        header: ' Current Email',
        size: 50,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
        size: 50,
    }),
    columnHelpers.accessor('current_address', {
        header: 'Current Address',
        size: 50,
    }),
    columnHelpers.accessor('occupation', {
        header: 'Occupation',
        size: 50,
    }),
    columnHelpers.accessor('current_phone', {
        header: 'Current Phone',
        size: 50,
    }),
]
