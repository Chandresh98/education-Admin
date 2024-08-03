import { StudentTeacherRatioReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentTeacherRatioReportParams>()

export const StudentTeacherRatioReportColumn = [
    columnHelpers.accessor('class_section', {
        header: 'Class (Section)',
        size: 200,
    }),
    columnHelpers.accessor('total_students', {
        header: 'Total Students',
        size: 200,
    }),
    columnHelpers.accessor('total_assigned_teachers', {
        header: 'Total Assigned Teachers',
        size: 200,
    }),
    columnHelpers.accessor('student_teacher_ratio', {
        header: 'Student - Teacher Ratio',
        size: 200,
    }),
]
