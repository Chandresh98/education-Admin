import { GalleryParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<GalleryParams>()

export const GalleryColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 200,
    }),
    columnHelpers.accessor('url', {
        header: 'URL',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
