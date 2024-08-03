import {  SubjectGroupParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<SubjectGroupParams>()

export const SubjectGroupColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 200,
    }),
    columnHelpers.accessor('class',{ 
        header: "Class",
        size: 200,
    }),
    columnHelpers.accessor('sections',{ 
        header: "Sections",
        size: 200,
    }),
    columnHelpers.accessor('subjects',{ 
        header: "Subject",
        size: 200,
    })
]