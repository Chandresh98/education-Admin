'use client'

import { SelectHTMLAttributes, forwardRef } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    error?: string
    options: string[]
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
    { name, label, error, className, required, options, ...rest },
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
            <select
                ref={ref}
                id={rest.id}
                name={name}
                {...rest}
                className={`w-full rounded border-[1.5px] ${
                    error ? 'border-red' : 'border-stroke'
                } bg-transparent px-5 py-3 text-black outline-none transition focus:border-success active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${className}`}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                ))}
            </select>
            {error && <p className="mt-1 ml-2 text-sm text-meta-1">{error}</p>}
        </div>
    )
})

export default Select
