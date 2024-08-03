import { HostelParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HostelParams>()

export const HostelColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('hostel_type', {
        header: 'Hostel type',
        size: 50,
    }),
    columnHelpers.accessor('total_rooms', {
        header: 'Total rooms',
        size: 50,
    }),
    columnHelpers.accessor('total_beds', {
        header: 'Total beds',
        size: 50,
    }),
    columnHelpers.accessor('warden', {
        header: ' Warden',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: ' Action',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
