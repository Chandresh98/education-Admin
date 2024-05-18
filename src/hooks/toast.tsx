import { toast } from 'react-toastify'

export type ToastType = {
    message?: string
}

export const useToast = () => {
    const ToastError = ({ message }: ToastType) => {
        toast.error(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    const ToastSuccess = ({ message }: ToastType) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    return {
        ToastError,
        ToastSuccess,
    }
}
