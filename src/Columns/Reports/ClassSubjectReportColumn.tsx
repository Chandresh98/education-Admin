import { ClassSubjectReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ClassSubjectReportParams>()

export const ClassSubjectReportColumn = [
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 200,
    }),
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 200,
    }),
    columnHelpers.accessor('teacher', {
        header: 'Teacher',
        size: 200,
    }),
    columnHelpers.accessor('time', {
        header: 'Time',
        size: 200,
    }),
    columnHelpers.accessor('room_no', {
        header: 'Room No',
        size: 200,
    }),
]
