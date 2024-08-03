import { GradeParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<GradeParams>()

export const GradeColumn = [
    columnHelpers.accessor('grade_type', {
        header: 'Grade Type',
        size: 50,
    }),columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('gpa', {
        header: 'GPA',
        size: 50,
    }),
    columnHelpers.accessor('percentage_from', {
        header: 'Percentage From',
        size: 50,
    }),
    columnHelpers.accessor('percentage_to', {
        header: 'Percentage To',
        size: 50,
    }),
    columnHelpers.accessor('gpa_from', {
        header: 'GPA From',
        size: 50,
    }),
    columnHelpers.accessor('gpa_to', {
        header: 'GPA To',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
