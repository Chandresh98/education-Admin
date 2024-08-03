import { ExamsRankReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ExamsRankReportParams>()

export const ExamsRankReportColumn = [
    // columnHelpers.accessor('admission_no', {
    // header: 'Admission No',
    // size: 50,
    // }),
]
