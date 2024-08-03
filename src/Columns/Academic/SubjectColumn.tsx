import {  SubjectParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SubjectParams>()

export const SubjectColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('code', {
        header: ' Code',
        size: 200,
    }),
    columnHelpers.accessor('type', {
        header: ' Type',
        size: 200,
    })
]