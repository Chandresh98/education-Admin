import {  ClassParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<ClassParams>()

export const ClassColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('select_section',{ 
        header: "Sections",
        size: 200,
    }),
    columnHelpers.accessor('status',{ 
        header: "Status",
        size: 200,
    }),
]