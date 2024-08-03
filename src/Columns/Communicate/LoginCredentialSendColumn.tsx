import { LoginCredentialsSendParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<LoginCredentialsSendParams>()

export const LoginCredentialsSendColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
        size: 50,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
        size: 50,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 50,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 50,
    }),
    columnHelpers.accessor('aadhar_number', {
        header: 'Aadhar Number',
        size: 50,
    }),
]
