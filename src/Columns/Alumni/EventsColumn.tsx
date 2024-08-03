import { EventsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<EventsParams>()

export const EventsColumn = [
    columnHelpers.accessor('event_title', {
        header: 'Event Title',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('section', {
        header: 'Section',
        size: 200,
    }),
    columnHelpers.accessor('pass_out_session', {
        header: 'Pass Out Session',
        size: 200,
    }),
    columnHelpers.accessor('from', {
        header: 'From',
        size: 200,
    }),
    columnHelpers.accessor('to', {
        header: 'To',
        size: 200,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
        size: 200,
    }),
]
