import { UserLogParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<UserLogParams>()

export const UserLogColumn = [
    columnHelpers.accessor('users', {
        header: ' Users',
        size: 50,
    }),
    columnHelpers.accessor('role', {
        header: 'Role',
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 50,
    }),
    columnHelpers.accessor('ip_address', {
        header: ' IP Address',
        size: 50,
    }),
    columnHelpers.accessor('login_time', {
        header: ' Login Time',
        size: 50,
    }),
    columnHelpers.accessor('user_agent', {
        header: ' User Agent',
        size: 50,
    }),
]
