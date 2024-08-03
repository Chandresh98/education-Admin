import { StopsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<StopsParams>()

export const StopsColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('address', {
        header: 'address',
    }),  
    columnHelpers.accessor('latitude', {
        header: ' Latitude',
        size: 50,
    }),
    columnHelpers.accessor('longitude', {
        header: ' Longitude',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: ' Status',
        size: 50,
    }),
]