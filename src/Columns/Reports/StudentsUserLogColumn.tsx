import { StudentsUserLogParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StudentsUserLogParams>()

export const StudentsUserLogColumn = [
    columnHelpers.accessor('users', {
        header: 'Users',
        size: 200,
    }),
    columnHelpers.accessor('role', {
        header: 'Role',
        size: 200,
    }),
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('ip_address', {
        header: 'IP Address',
        size: 200,
    }),
    columnHelpers.accessor('login_time', {
        header: 'Login Time',
        size: 200,
    }),
    columnHelpers.accessor('user_agent', {
        header: 'User Agent',
        size: 200,
    }),
]
