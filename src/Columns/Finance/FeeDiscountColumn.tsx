import { FeeDiscountParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<FeeDiscountParams>()

export const FeeDiscountColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('discount_code', {
        header: 'Discount code',
        size: 50,
    }),
    columnHelpers.accessor('discount_type', {
        header: 'Discount Type',
        size: 50,
    }),
    columnHelpers.accessor('discount_amount', {
        header: 'Discount Amount',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
