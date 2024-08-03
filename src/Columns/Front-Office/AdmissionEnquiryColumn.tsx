import { AdmissionEnquiryParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

const columnHelpers = createMRTColumnHelper<AdmissionEnquiryParams>()

export const AdmissionEnquiryColumn = [
    columnHelpers.accessor('name', {
        header: 'Name',
        size: 50,
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
        size: 50,
    }),
    columnHelpers.accessor('source', {
        header: 'Source',
        size: 50,
    }),
    columnHelpers.accessor('enquiry_date', {
        header: 'Enquiry Date',
        size: 50,
    }),
    columnHelpers.accessor('last_follow_up_date', {
        header: 'Last Follow Uo Date',
        size: 50,
    }),
    columnHelpers.accessor('next_follow_up_date', {
        header: 'Next Follow Uo Date',
        size: 50,
    }),
    columnHelpers.accessor('status', {
        header: 'Status',
        size: 50,
    }),
    columnHelpers.accessor('action', {
        header: 'Action',
    }),
]
