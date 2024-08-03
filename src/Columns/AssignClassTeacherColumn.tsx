import {  AssignClassTeacherParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AssignClassTeacherParams>()

export const AssignClassTeacherColumn = [
    columnHelpers.accessor('class', {
        header: 'Class',
        size: 200,
    }),
    columnHelpers.accessor('section',{ 
        header: "Section",
        size: 200,
    }),
    columnHelpers.accessor('teacher',{ 
        header: "teacher",
        size: 200,
    })
]