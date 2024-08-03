import { GenerateStaffCertificateParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<GenerateStaffCertificateParams>()

export const GenerateStaffCertificateColumn = [
    columnHelpers.accessor('staff_name', {
        header: 'Staff Name',
        size: 50,
    }),
    columnHelpers.accessor('role', {
        header: 'Role',
        size: 50,
    }),
    columnHelpers.accessor('designation', {
        header: 'Designation',
        size: 50,
    }),
    columnHelpers.accessor('department', {
        header: ' Department',
        size: 50,
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
    }),
    columnHelpers.accessor('mother_name', {
        header: 'Mother Name',
    }),
    columnHelpers.accessor('date_of_joining', {
        header: 'Date Of Joining',
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
    }),
    columnHelpers.accessor('date_of_birth', {
        header: 'Date Of Birth',
    }),
]
