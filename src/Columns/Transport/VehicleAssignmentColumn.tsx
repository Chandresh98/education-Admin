import { VehicleAssignmentParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<VehicleAssignmentParams>()

export const VehicleAssignmentColumn = [
    columnHelpers.accessor('vehicle', {
        header: ' Vehicle',
        size: 50,
    }),
    columnHelpers.accessor('driver', {
        header: ' Driver',
        size: 50,
    }),
    columnHelpers.accessor('route', {
        header: ' Route',
        size: 50,
    }),
    columnHelpers.accessor('date', {
        header: ' Date',
        size: 50,
    })
]