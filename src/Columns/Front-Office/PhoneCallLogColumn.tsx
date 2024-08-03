import { PhoneCallLogParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<PhoneCallLogParams>()

export const PhoneCallLogColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('next_follow_up_date', {
        header: ' Next Follow Up Date',
        size: 50,
    }),
    columnHelpers.accessor('call_type', {
        header: 'Call Type',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
