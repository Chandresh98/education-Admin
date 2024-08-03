import { AdmissionReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AdmissionReportParams>()

export const AdmissionReportColumn = [
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
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 200,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
        size: 200,
    }),
    columnHelpers.accessor('admission_date', {
        header: 'Admission Date',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
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
]
