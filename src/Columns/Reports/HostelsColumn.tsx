import { HostelsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HostelsParams>()

export const HostelsColumn = [
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
    columnHelpers.accessor('guardian_phone', {
        header: 'Guardian Phone',
        size: 50,
    }),
    columnHelpers.accessor('hostel_name', {
        header: 'Hostel Name',
        size: 50,
    }),
    columnHelpers.accessor('room_number_name', {
        header: 'Room Number / Name',
        size: 50,
    }),
    columnHelpers.accessor('room_type', {
        header: 'Room Type',
        size: 50,
    }),
    columnHelpers.accessor('cost_per_bed', {
        header: 'Cost Per Bed',
        size: 50,
    }),
]
