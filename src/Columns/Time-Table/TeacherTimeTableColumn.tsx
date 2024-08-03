import { TeacherTimeTableParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TeacherTimeTableParams>()

export const TeacherTimeTableColumn = [
    columnHelpers.accessor('monday', {
        header: 'Monday',
        size: 50,
    }),
    columnHelpers.accessor('tuesday', {
        header: '  Tuesday',
        size: 50,
    }),
    columnHelpers.accessor('wednesday', {
        header: 'Wednesday',
        size: 50,
    }),
    columnHelpers.accessor('thursday', {
        header: ' Thursday',
        size: 50,
    }),
    columnHelpers.accessor('friday', {
        header: ' Friday',
        size: 50,
    }),
    columnHelpers.accessor('saturday', {
        header: ' Saturday',
        size: 50,
    }),
    columnHelpers.accessor('sunday', {
        header: 'Sunday',
    }),
]
