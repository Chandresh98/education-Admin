import { VehicleFuelParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VehicleFuelParams>()

export const VehicleFuelColumn = [
    columnHelpers.accessor('vehicle', {
        header: 'Vehicle',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: 'date',
        size: 50,
    }),
    columnHelpers.accessor('fuel_type', {
        header: 'Fuel type',
        size: 50,
    }),
    columnHelpers.accessor('quantity', {
        header: 'Quantity',
        size: 50,
    }),
    columnHelpers.accessor('unit_price', {
        header: 'Unit price',
        size: 50,
    }),
    columnHelpers.accessor('total_amount', {
        header: 'Total amount',
        size: 50,
    })
]