import {  DeductionParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<DeductionParams>()

export const DeductionColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('status',{ 
        header: "Status",
        size: 200,
    })
]