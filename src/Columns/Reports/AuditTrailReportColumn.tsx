import { AuditTrailReportParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AuditTrailReportParams>()

export const AuditTrailReportColumn = [
    columnHelpers.accessor('message', {
        header: 'Message',
        size: 50,
    }),
    columnHelpers.accessor('users', {
        header: 'Users',
    }),
    columnHelpers.accessor('ip_address', {
        header: 'IP Address',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: ' Action',
        size: 50,
    }),
    columnHelpers.accessor('platform', {
        header: ' Platform',
        size: 50,
    }),
    columnHelpers.accessor('agent', {
        header: 'Agent',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('time', {
        header: 'Time',
        size: 50,
    }),
]
