import {  CustomFieldsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<CustomFieldsParams>()

export const CustomFieldsColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('actions',{ 
        header: "Actions",
        size: 200,
    }),
]