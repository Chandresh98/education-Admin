import { EmailSMSLogParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<EmailSMSLogParams>()

export const EmailSMSLogColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('email', {
        header: 'Email',
        size: 50,
    }),
    columnHelpers.accessor('sms', {
        header: 'SMS',
        size: 50,
    }),
    columnHelpers.accessor('group', {
        header: 'Group',
        size: 50,
    }),
    columnHelpers.accessor('individual', {
        header: 'individual',
        size: 50,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
]
