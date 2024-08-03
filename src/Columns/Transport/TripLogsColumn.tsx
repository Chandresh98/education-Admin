import { TripLogsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TripLogsParams>()

export const TripLogsColumn = [
    columnHelpers.accessor('date', {
        header: 'Date',
        size: 50,
    }),
    columnHelpers.accessor('vehicle', {
        header: 'Vehicle',
        size: 50,
    }),
    columnHelpers.accessor('driver', {
        header: 'Driver',
        size: 50,
    }),
    columnHelpers.accessor('route', {
        header: 'Route',
        size: 50,
    }),
    columnHelpers.accessor('in_time', {
        header: 'In time',
        size: 50,
    })
]