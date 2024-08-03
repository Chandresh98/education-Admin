import { StaffReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StaffReportParams>()

export const StaffReportColumn = [
    columnHelpers.accessor('staff_id', {
        header: 'Staff ID',
        size: 200,
    }),
    columnHelpers.accessor('department', {
        header: 'Department',
        size: 200,
    }),
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
        size: 200,
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
        size: 200,
    }),
    columnHelpers.accessor('email', {
        header: 'Email',
        size: 200,
    }),
    columnHelpers.accessor('gender', {
        header: 'Gender',
        size: 200,
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
        size: 200,
    }),
    columnHelpers.accessor('date_of_joining', {
        header: 'Date Of Joining',
        size: 200,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 200,
    }),
    columnHelpers.accessor('emergency_contact_number', {
        header: 'Emergency Conmtact Number',
        size: 200,
    }),
    columnHelpers.accessor('marital_status', {
        header: 'Marital Status',
        size: 200,
    }),
    columnHelpers.accessor('current_address', {
        header: 'Current Address',
        size: 200,
    }),
    columnHelpers.accessor('permanent_address', {
        header: 'Permanent Address',
        size: 200,
    }),
    columnHelpers.accessor('qualification', {
        header: 'Qualification',
        size: 200,
    }),
    columnHelpers.accessor('work_experience', {
        header: 'Work Experience',
        size: 200,
    }),
    columnHelpers.accessor('note', {
        header: 'Note',
        size: 200,
    }),
    columnHelpers.accessor('epf_no', {
        header: 'EPF No.',
        size: 200,
    }),

    columnHelpers.accessor('basic_salary', {
        header: 'Basic Salary',
        size: 200,
    }),

    columnHelpers.accessor('contract_type', {
        header: 'Contract Type',
        size: 200,
    }),

    columnHelpers.accessor('work_shift', {
        header: 'Work Shift',
        size: 200,
    }),
    columnHelpers.accessor('location', {
        header: 'Location',
        size: 200,
    }),

    columnHelpers.accessor('leaves', {
        header: 'Leaves',
        size: 200,
    }),

    columnHelpers.accessor('account_title', {
        header: 'Account Title',
        size: 200,
    }),
    columnHelpers.accessor('bank_account_number', {
        header: 'Bank Account Number',
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

    columnHelpers.accessor('bank_branch_name', {
        header: 'Bank Branch Name',
        size: 200,
    }),
    columnHelpers.accessor('social_media_link', {
        header: 'Social Media Link',
        size: 200,
    }),
]
