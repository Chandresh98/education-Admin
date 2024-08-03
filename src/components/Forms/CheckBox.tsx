'use client'

import { InputHTMLAttributes, forwardRef, useState } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string
    label: string
}

const CheckBox = forwardRef<HTMLInputElement, Props>(function CheckBox(
    { error, label, name, required, className, ...rest },
    ref,
) {
    return (
        <div className="flex items-center ">
            <label
                htmlFor={name}
                className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        ref={ref}
                        id={name}
                        name={name}
                        required={required}
                        {...rest}
                    />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100 ml-2">
                    {label}
                </span>
            </label>
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    )
})

export default CheckBox
