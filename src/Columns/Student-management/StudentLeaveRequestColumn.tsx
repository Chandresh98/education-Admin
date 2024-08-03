import { StudentLeaveRequestParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentLeaveRequestParams>()

export const StudentLeaveRequestColumn = [
    columnHelpers.accessor('student', {
        header: 'Student',
        size: 50,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 50,
    }),
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('reason', {
        header: 'Reason',
        size: 50,
    }),
    columnHelpers.accessor('from_date', {
        header: 'From date',
        size: 50,
    }),
    columnHelpers.accessor('to_date', {
        header: 'To date',
        size: 50,
    }) 
    
]