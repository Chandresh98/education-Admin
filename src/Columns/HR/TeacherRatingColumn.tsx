import { TeacherRatingParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<TeacherRatingParams>()

export const TeacherRatingColumn = [
    columnHelpers.accessor('staff', {
        header: ' staff',
        size: 50,
    }),
    columnHelpers.accessor('rating_from', {
        header: 'Rating from',
        size: 50,
    }),
    columnHelpers.accessor('rating_by', {
        header: 'Rating by',
        size: 50,
    }),
    columnHelpers.accessor('rating', {
        header: 'Rating',
        size: 50,
    }),
    columnHelpers.accessor('comment', {
        header: ' Comment',
        size: 50,
    }),
    columnHelpers.accessor('rating_status', {
        header: 'Rating status',
        size: 50,
    })
    
]
