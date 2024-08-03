import { HostelRoomAllocationParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HostelRoomAllocationParams>()

export const HostelRoomAllocationColumn = [
    columnHelpers.accessor('hostel_room', {
        header: ' Hostel room',
        size: 50,
    }),
    columnHelpers.accessor('student', {
        header: 'Student',
        size: 50,
    }),
    columnHelpers.accessor('from_date', {
        header: 'From Date',
        size: 50,
    }),
    columnHelpers.accessor('to_date', {
        header: 'To date',
        size: 50,
    }),
    columnHelpers.accessor('actions', {
        header: 'Actions',
    })   
    
]
