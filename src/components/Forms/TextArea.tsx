'use client'

import { TextareaHTMLAttributes, forwardRef } from 'react'

interface props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string
    label: string
}

const TextArea = forwardRef<HTMLTextAreaElement, props>(function TextArea({
    name,
    label,
    error,
    className,
    required,
    placeholder,
    ...rest
}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="mb-3 block text-sm font-medium text-black dark:text-white">
                {label}
                {required && <span className="text-meta-1"> * </span>}
            </label>
            <textarea
                id={name}
                name={name}
                className={`w-full rounded border-[1.5px] ${
                    error ? 'border-red' : 'border-stroke'
                } bg-transparent px-5 py-3 text-black outline-none transition focus:border-success active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}
                {...rest}>
                {placeholder}
            </textarea>
            {error && <p className="mt-1 ml-2 text-sm text-meta-1">{error}</p>}
        </div>
    )
})

export default TextArea
