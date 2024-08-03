import { MemberParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<MemberParams>()

export const MemberColumn = [
    columnHelpers.accessor('member_type', {
        header: 'Member Type',
        size: 50,
    }),
    columnHelpers.accessor('student', {
        header: 'Student',
        size: 50,
    }),columnHelpers.accessor('staff', {
        header: 'Staff',
        size: 50,
    }),
    columnHelpers.accessor('member_id', {
        header: 'Member ID',
        size: 50,
    }),
    columnHelpers.accessor('fine_amount', {
        header: 'Fine Amount',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
