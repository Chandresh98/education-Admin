import { BulkDeleteParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<BulkDeleteParams>()

export const BulkDeleteColumn = [
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
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 50,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date of Birth',
        size: 50,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 50,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
        size: 50,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 50,
    }),
    columnHelpers.accessor('adhaar_number', {
        header: 'Adhaar Number',
        size: 50,
    })
]