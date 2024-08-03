import { StudentLoginCredentialParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentLoginCredentialParams>()

export const StudentLoginCredentialColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 200,
    }),
    columnHelpers.accessor('user_name', {
        header: 'User Name',
        size: 200,
    }),
    columnHelpers.accessor('password', {
        header: 'Password',
        size: 200,
    }),
    columnHelpers.accessor('parent_user_name', {
        header: 'Parent User Name',
        size: 200,
    }),
    columnHelpers.accessor('parent_password', {
        header: 'Parent Password',
        size: 200,
    }),
]
