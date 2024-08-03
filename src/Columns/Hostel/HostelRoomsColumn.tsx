import { HostelRoomsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HostelRoomsParams>()

export const HostelRoomsColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('hostel', {
        header: 'Hostel',
        size: 50,
    }),
    columnHelpers.accessor('number_of_beds', {
        header: 'Number of beds',
        size: 50,
    }),
    columnHelpers.accessor('occupation_status', {
        header: 'Occupation status',
        size: 50,
    }),
    columnHelpers.accessor('vacant_beds', {
        header: ' Vacant beds',
        size: 50,
    }),
    columnHelpers.accessor('floor', {
        header: ' Floor',
        size: 50,
    }),
    columnHelpers.accessor('actions', {
        header: ' actions',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
