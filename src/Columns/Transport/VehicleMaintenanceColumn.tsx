import { VehicleMaintenanceParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VehicleMaintenanceParams>()

export const VehicleMaintenanceColumn = [
    columnHelpers.accessor('vehicle', {
        header: 'Vehicle',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'date',
        size: 50,
    }),
    columnHelpers.accessor('description', {
        header: 'Description',
        size: 50,
    }),
    columnHelpers.accessor('amount', {
        header: 'Amount',
        size: 50,
    })
    
]