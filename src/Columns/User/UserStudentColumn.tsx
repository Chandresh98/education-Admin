import { UserStudentParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<UserStudentParams>()

export const UserStudentColumn = [
    columnHelpers.accessor('admission_id', {
        header: ' Admission ID',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('class_and_section', {
        header: 'Class and Section',
    }),
    columnHelpers.accessor('father_name', {
        header: 'Father Name',
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
    }),
    columnHelpers.accessor('actions', {
        header: ' Actions',
        size: 50,
    }),
    columnHelpers.accessor('update', {
        header: 'Update',
    })

]