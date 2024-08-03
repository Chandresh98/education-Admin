import { LanguageParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<LanguageParams>()

export const LanguageColumn = [
    columnHelpers.accessor('name', {
        header: ' Name',
        size: 200,
    }),
    columnHelpers.accessor('slug',{  //params 
        header: "Slug",// header name 
        size: 200,
    }),
    columnHelpers.accessor('country_code',{  //params 
        header: "Country Code",
        size: 200,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
    }),
    
]