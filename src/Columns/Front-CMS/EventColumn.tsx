import { EventParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<EventParams>()

export const EventColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 200,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 200,
    }),
    columnHelpers.accessor('venue', {
        header: ' Venue',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
