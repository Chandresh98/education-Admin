import { TransportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TransportParams>()

export const TransportColumn = [
    columnHelpers.accessor('class_section', {
        header: 'Class - Section',
        size: 50,
    }),
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 50,
    }),
    columnHelpers.accessor('student_name', {
        header: 'Student Name',
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 50,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 50,
    }),
    columnHelpers.accessor('father_phone', {
        header: 'Father Phone',
        size: 50,
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
        size: 50,
    }),
    columnHelpers.accessor('mother_phone', {
        header: 'Mother Phone',
        size: 50,
    }),
    columnHelpers.accessor('route_title', {
        header: 'Route title',
        size: 50,
    }),
    columnHelpers.accessor('vehicle_number', {
        header: 'Vehicle Number',
        size: 50,
    }),
    columnHelpers.accessor('driver_name', {
        header: 'Driver Name',
        size: 50,
    }),
    columnHelpers.accessor('driver_contact', {
        header: 'Driver Contact',
        size: 50,
    }),
    columnHelpers.accessor('fare', {
        header: 'Fare',
        size: 50,
    }),
]
