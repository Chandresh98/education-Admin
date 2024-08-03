import { VehiclesParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VehiclesParams>()

export const VehiclesColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('code', {
        header: ' Code',
        size: 50,
    }),
    columnHelpers.accessor('number', {
        header: ' Number',
        size: 50,
    }),
    columnHelpers.accessor('type', {
        header: ' Type',
        size: 50,
    }),
    columnHelpers.accessor('model', {
        header: 'Model',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]