import { DailyAttendanceReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<DailyAttendanceReportParams>()

export const DailyAttendanceReportColumn = [
    columnHelpers.accessor('class_section', {
        header: 'Classs (Section)',
        size: 200,
    }),
    columnHelpers.accessor('total_present', {
        header: 'Total Present',
        size: 200,
    }),
    columnHelpers.accessor('total_absent', {
        header: 'Total Absent',
        size: 200,
    }),
    columnHelpers.accessor('present', {
        header: 'Present %',
        size: 200,
    }),
    columnHelpers.accessor('absent', {
        header: 'Absent %',
        size: 200,
    }),
]
