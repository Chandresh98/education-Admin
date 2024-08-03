import {  SectionsParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SectionsParams>()

export const SectionsColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    })
]