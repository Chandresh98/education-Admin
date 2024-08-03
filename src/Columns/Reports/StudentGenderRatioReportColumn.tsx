import { StudentGenderRatioReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentGenderRatioReportParams>()

export const StudentGenderRatioReportColumn = [
    columnHelpers.accessor('class_section', {
        header: 'Class (Section)',
        size: 200,
    }),
    columnHelpers.accessor('total_boys', {
        header: 'TOtal Boys',
        size: 200,
    }),
    columnHelpers.accessor('total_girls', {
        header: 'Total Girls',
        size: 200,
    }),
    columnHelpers.accessor('total_students', {
        header: 'Total Students',
        size: 200,
    }),
    columnHelpers.accessor('boys_girls_ratio', {
        header: 'Boys - Girls Ratio',
        size: 200,
    }),
]
