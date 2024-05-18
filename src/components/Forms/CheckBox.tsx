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
    const [isChecked, setIsChecked] = useState<boolean>(false)
    return (
        <div className="flex items-center">
            <label
                htmlFor={name}
                className="flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input
                        type="checkbox"
                        ref={ref}
                        id={name}
                        className="sr-only"
                        name={name}
                        required={required}
                        {...rest}
                        onChange={() => setIsChecked(!isChecked)}
                    />
                    <div
                        className={`mr-3 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked &&
                            'border-primary bg-gray dark:bg-transparent'
                        }`}>
                        <span
                            className={`h-2.5 w-2.5 rounded-sm ${
                                isChecked && 'bg-primary'
                            }`}></span>
                    </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {label}
                </span>
            </label>
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    )
})

export default CheckBox
