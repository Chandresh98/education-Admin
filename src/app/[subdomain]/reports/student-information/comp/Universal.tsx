'use client'
import React from 'react'
import Layout, { data } from '../layout'
import Link from 'next/link'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { usePathname } from 'next/navigation'

const Universal = ({ data }) => {
    let pathname = usePathname()
    return (
        <>
            {data.map((item: data) => {
                return (
                    <div
                        key={item.id}
                        className={`m-4 flex items-center gap-2 hover:text-blue-400`}>
                        <IoDocumentTextOutline />
                        <Link
                            href={item.to}
                            className={`${
                                pathname === item.to && 'text-blue-500'
                            }`}>
                            {item.name}{' '}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Universal
