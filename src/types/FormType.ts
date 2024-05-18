import { InstituteGroupType } from '@/Schemas/Schema'

export type InstituteGroupParams = {
    name: string
    domain: string
    code?: string
    description: string
    about?: string
    address: string
    city: string
    state: string
    pincode: number
    phone: string
    email: string
    contact_person_name: string
    contact_person_email?: string
    contact_person_phone: string
    website_url?: string
    established_year?: string
    logo_url?: FileList
    logo_small_url?: FileList
    favicon_url?: FileList
    type: InstituteGroupType
    password: string
    confirm_password?: string
}

export type SectionParams = {
    name: string
    description?: string
}

export type SessionParams = {
    name: string
    status?: boolean
}
