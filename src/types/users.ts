export interface User {
    id: number
    name: string
    email: string
    phone?: string
    is_admin: boolean
    created_at?: string
    updated_at?: string
    status?: boolean
    avatar?: string
    email_verified: boolean
}

export type UserParams = {
    user?: User
}
