'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'

interface props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

const Radio = forwardRef<HTMLInputElement, props>(function Radio(
    { name, label, error, className, required, ...rest },
    ref,
) {
    return (
        <div className="flex items-center">
            <label
                htmlFor={name}
                className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="radio"
                        ref={ref}
                        id={name}
                        name={name}
                        required={required}
                        {...rest}
                    />
                </div>
                <span className="ml-2 text-sm font-medium text-primary dark:text-white">
                    {label}
                </span>
                {error && (
                    <span className="ml-2 text-sm text-red-500">{error}</span>
                )}
            </label>
        </div>
    )
})

export default Radio