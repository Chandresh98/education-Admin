import { StudentProfileParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentProfileParams>()

export const StudentProfileColumn = [
    columnHelpers.accessor('admission_no', {
        header: 'Admission No',
        size: 200,
    }),
    columnHelpers.accessor('roll_number', {
        header: 'Roll Number',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 200,
    }),
    columnHelpers.accessor('first_name', {
        header: 'First Name',
        size: 200,
    }),
    columnHelpers.accessor('middle_name', {
        header: 'Middle Name',
        size: 200,
    }),

    columnHelpers.accessor('last_name', {
        header: 'Last Name',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 200,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of BIrth',
        size: 200,
    }),
    columnHelpers.accessor('category', {
        header: 'Category',
        size: 200,
    }),
    columnHelpers.accessor('religion', {
        header: 'Religion',
        size: 200,
    }),
    columnHelpers.accessor('caste', {
        header: 'Caste',
        size: 200,
    }),
    columnHelpers.accessor('mobile_number', {
        header: 'Mobile Number',
        size: 200,
    }),
    columnHelpers.accessor('email', {
        header: 'Email',
        size: 200,
    }),
    columnHelpers.accessor('admission_date', {
        header: 'Admission date',
        size: 200,
    }),
    columnHelpers.accessor('blood_group', {
        header: 'Blood Group',
        size: 200,
    }),
    columnHelpers.accessor('student_house', {
        header: 'Student House',
        size: 200,
    }),
    columnHelpers.accessor('height', {
        header: 'Height',
        size: 200,
    }),
    columnHelpers.accessor('weight', {
        header: 'Weight',
        size: 200,
    }),
    columnHelpers.accessor('as_on_date', {
        header: 'As on date',
        size: 200,
    }),
    columnHelpers.accessor('fees_discount', {
        header: 'Fees Discount',
        size: 200,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 200,
    }),
    columnHelpers.accessor('father_phone', {
        header: 'Father Phone',
        size: 200,
    }),
    columnHelpers.accessor('father_occupation', {
        header: 'Father Occupation',
        size: 200,
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
        size: 200,
    }),
    columnHelpers.accessor('if_guardian_is', {
        header: 'If Guardian Is',
        size: 200,
    }),
    columnHelpers.accessor('guardian_name', {
        header: 'Guardian Name',
        size: 200,
    }),
    columnHelpers.accessor('guardian_relation', {
        header: 'Guardian Releation',
        size: 200,
    }),
    columnHelpers.accessor('guardian_phone', {
        header: 'Guardian Phone',
        size: 200,
    }),
    columnHelpers.accessor('guardian_occupation', {
        header: 'Guardian Occupation',
        size: 200,
    }),
    columnHelpers.accessor('guardian_email', {
        header: 'Guardian Email',
        size: 200,
    }),
    columnHelpers.accessor('guardian_address', {
        header: 'Guardian Address',
        size: 200,
    }),
    columnHelpers.accessor('permanent_address', {
        header: 'Permanent Address',
        size: 200,
    }),
    columnHelpers.accessor('route_list', {
        header: 'Route List',
        size: 200,
    }),

    columnHelpers.accessor('hostel_details', {
        header: 'Hostel Details',
        size: 200,
    }),
    columnHelpers.accessor('room_no', {
        header: 'Room No',
        size: 200,
    }),
    columnHelpers.accessor('bank_account_number', {
        header: 'Bank Account number',
        size: 200,
    }),

    columnHelpers.accessor('bank_name', {
        header: 'Bank Name',
        size: 200,
    }),
    columnHelpers.accessor('ifsc_code', {
        header: 'IFSC Code',
        size: 200,
    }),

    columnHelpers.accessor('national_identification_number', {
        header: 'National Identification Number',
        size: 200,
    }),

    columnHelpers.accessor('local_identification_number', {
        header: 'Local Identification Number',
        size: 200,
    }),
    columnHelpers.accessor('rte', {
        header: 'RTE',
        size: 200,
    }),
    columnHelpers.accessor('previous_school_details', {
        header: 'Previous School Details',
        size: 200,
    }),
    columnHelpers.accessor('note', {
        header: 'Note',
        size: 200,
    }),
]
