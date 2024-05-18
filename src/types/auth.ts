import { Dispatch, SetStateAction } from 'react'

export type LoginParams = {
    email: string
    password: string
    remember?: boolean
    setErrors: SetErrorsParams
    setStatus: SetStatusParams
    // setLoading: SetLoadingParams
}

export type AuthHookParams = {
    middleware?: string | null
    redirectIfAuthenticated?: string | undefined
}

export type SetErrorsParams = Dispatch<SetStateAction<[]>>
export type SetStatusParams = Dispatch<SetStateAction<string | null>>
export type SetLoadingParams = Dispatch<SetStateAction<boolean>>

export type RegisterParams = {
    email: string
    password: string
    phone?: string
    avatar?: string
    name: string
    is_admin?: boolean
    status?: boolean
    setErrors: SetErrorsParams
}

export type ForgetPasswordParams = {
    email: string
    setErrors: SetErrorsParams
    setStatus: SetStatusParams
}

export type ResetPasswordParams = {
    email: string
    password: string
    password_confirmation: string
    setErrors: SetErrorsParams
    setStatus: SetStatusParams
    // params: []
}

export type ResendEmailVerificationParams = {
    setStatus: SetStatusParams
}
