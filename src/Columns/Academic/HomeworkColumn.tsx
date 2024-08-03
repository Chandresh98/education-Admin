import {  HomeworkParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<HomeworkParams>()

export const HomeworkColumn = [
    columnHelpers.accessor('title', {
        header: 'Title',
        size: 200,
    }),
    columnHelpers.accessor('class',{ 
        header: "Class",
        size: 200,
    }),
    columnHelpers.accessor('section',{ 
        header: "Section",
        size: 200,
    }),
    columnHelpers.accessor('subject',{ 
        header: "Subject",
        size: 200,
    }),
    columnHelpers.accessor('date',{ 
        header: "Date",
        size: 200,
    }),
    columnHelpers.accessor('due_date',{ 
        header: "Due date",
        size: 200,
    })
]