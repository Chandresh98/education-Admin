import {  StaffShiftParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StaffShiftParams>()

export const StaffShiftColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('start_time',{ 
        header: "Start time",
        size: 200,
    }),
    columnHelpers.accessor('end_time',{ 
        header: "End time",
        size: 200,
    }),
]