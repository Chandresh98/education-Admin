import { ManageAlumniParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ManageAlumniParams>()

export const ManageAlumniColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 200,
    }),
    columnHelpers.accessor('current_email', {
        header: 'Current Email',
        size: 200,
    }),
    columnHelpers.accessor('current_phone', {
        header: 'Current Phone',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
