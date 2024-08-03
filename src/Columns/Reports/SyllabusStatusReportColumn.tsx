import { SyllabusStatusReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SyllabusStatusReportParams>()

export const SyllabusStatusReportColumn = [
    columnHelpers.accessor('subject', {
        header: 'Subject',
        size: 200,
    }),
    columnHelpers.accessor('lesson', {
        header: 'Lesson',
        size: 200,
    }),
    columnHelpers.accessor('topic', {
        header: 'Topic',
        size: 200,
    }),
]
