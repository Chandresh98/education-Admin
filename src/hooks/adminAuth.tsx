import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
    AuthHookParams,
    ForgetPasswordParams,
    LoginParams,
    RegisterParams,
    ResendEmailVerificationParams,
    ResetPasswordParams,
} from '@/types/auth'

export const useAuth = ({
    middleware,
    redirectIfAuthenticated,
}: AuthHookParams) => {
    const router = useRouter()
    const params = useParams()
    const [loading, setLoading] = useState<boolean>(false)

    const { data: user, error, mutate } = useSWR('/api/admin/user', () =>
        axios
            .get('/api/admin/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
                console.log(error)
                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }: RegisterParams) => {
        setLoading(false)

        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        setLoading(true)
    }

    const login = async ({ setErrors, setStatus, ...props }: LoginParams) => {
        setLoading(false)

        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/admin/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        setLoading(true)
    }

    const forgotPassword = async ({
        setErrors,
        setStatus,
        email,
    }: ForgetPasswordParams) => {
        setLoading(false)

        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        setLoading(true)
    }

    const resetPassword = async ({
        setErrors,
        setStatus,
        ...props
    }: ResetPasswordParams) => {
        setLoading(false)
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        setLoading(true)
    }

    const resendEmailVerification = ({
        setStatus,
    }: ResendEmailVerificationParams) => {
        setLoading(false)

        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
        setLoading(true)
    }

    const logout = async () => {
        setLoading(false)

        if (!error) {
            await axios.post('/admin/logout').then(() => mutate())
        }
        setLoading(true)

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        loading,
        csrf,
    }
}
