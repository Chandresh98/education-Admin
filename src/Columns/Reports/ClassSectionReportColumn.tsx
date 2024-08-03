import { ClassSectionReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ClassSectionReportParams>()

export const ClassSectionReportColumn = [
    columnHelpers.accessor('s_no', {
        header: ' S.No.',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('student', {
        header: 'Student',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
