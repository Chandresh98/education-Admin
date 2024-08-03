import { RouteParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<RouteParams>()

export const RouteColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('start_point', {
        header: ' Start point',
        size: 50,
    }),
    columnHelpers.accessor('end_point', {
        header: ' End point',
        size: 50,
    }),
    columnHelpers.accessor('select_stops', {
        header: ' Select stops',
        size: 50,
    })
]