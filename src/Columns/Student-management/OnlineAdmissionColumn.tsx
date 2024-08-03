import { OnlineAdmissionParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<OnlineAdmissionParams>()

export const OnlineAdmissionColumn = [
    columnHelpers.accessor('reference_no', {
        header: 'Reference No',
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
    columnHelpers.accessor('student_mobile_number', {
        header: 'Student Mobile Number',
        size: 50,
    }),
    columnHelpers.accessor('form_status', {
        header: 'Form Status',
        size: 50,
    }),
    columnHelpers.accessor('payment_status', {
        header: 'Payment Status',
        size: 50,
    }),
    columnHelpers.accessor('enrolled', {
        header: 'Enrolled',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 50,
    })
]