import { StudentReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentReportParams>()

export const StudentReportColumn = [
    columnHelpers.accessor('section', {
        header: ' Section',
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
    columnHelpers.accessor('father_name', {
        header: ' father_name',
        size: 200,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: ' Gender',
        size: 200,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
        size: 200,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 200,
    }),
    columnHelpers.accessor('local_identification_number', {
        header: 'Local Identification Number',
        size: 200,
    }),
    columnHelpers.accessor('national_identification_number', {
        header: ' National Identification Number',
        size: 200,
    }),
    columnHelpers.accessor('rte', {
        header: 'RTE',
        size: 200,
    }),
]
