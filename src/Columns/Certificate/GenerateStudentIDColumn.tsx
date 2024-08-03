import { GenerateStudentIDParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<GenerateStudentIDParams>()

export const GenerateStudentIDColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: ' Student Name',
        size: 50,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 50,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: ' Date of Birth',
        size: 50,
    }),
    columnHelpers.accessor('gender', {
        header: ' Gender',
    }),
    columnHelpers.accessor('category', {
        header: ' Category',
    }),
    columnHelpers.accessor('mobile_number', {
        header: ' Mobile Number',
    }),
]
