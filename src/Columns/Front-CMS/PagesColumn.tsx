import { PagesParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PagesParams>()

export const PagesColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 200,
    }),
    columnHelpers.accessor('url', {
        header: 'URL',
        size: 200,
    }),
    columnHelpers.accessor('page_type', {
        header: 'Page Type',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
