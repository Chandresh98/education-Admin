'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label: string
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
    { name, error, label, required, className, placeholder, type, ...res },
    ref,
) {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className="mb-3 block text-sm font-medium text-black dark:text-white">
                {label}
                {required && <span className="text-meta-1"> * </span>}
            </label>
            <input
                ref={ref}
                id={name}
                name={name}
                type={type || 'text'}
                placeholder={placeholder || label}
                aria-invalid={!!error}
                className={`w-full rounded border-[1.5px] ${
                    error ? 'border-red' : 'border-stroke'
                } bg-transparent px-5 py-3 text-black outline-none transition focus:border-success active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}
                {...res}
            />
            {error && <p className="mt-1 ml-2 text-sm text-meta-1">{error}</p>}
        </div>
    )
})

export default Input
