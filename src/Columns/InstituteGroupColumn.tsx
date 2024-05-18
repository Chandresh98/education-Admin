'use client'

import { InstituteGroupParams } from '@/types/FormType'
import { createMRTColumnHelper } from 'material-react-table'

export const columnHelpers = createMRTColumnHelper<InstituteGroupParams>()

export const InstituteGroupColumn = [
    columnHelpers.accessor('name', {
        header: 'Group Name',
        size: 200,
    }),
    columnHelpers.accessor('email', {
        header: 'Email',
    }),
    columnHelpers.accessor('phone', {
        header: 'Phone',
    }),
    columnHelpers.accessor('city', {
        header: 'City',
    }),
    columnHelpers.accessor('contact_person_name', {
        header: 'Contact Person Name',
    }),
    columnHelpers.accessor('contact_person_phone', {
        header: 'Contact Person Phone',
    }),
]
