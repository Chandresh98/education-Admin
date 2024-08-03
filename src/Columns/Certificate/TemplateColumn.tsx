import { TemplateParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TemplateParams>()

export const TemplateColumn = [
    columnHelpers.accessor('belongs_to', {
        header: 'Belongs to',
        size: 50,
    }),
    columnHelpers.accessor('type', {
        header: ' Type',
        size: 50,
    }),
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 50,
    }),
    columnHelpers.accessor('page_layout', {
        header: ' Page Layout',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    })   
    
]
