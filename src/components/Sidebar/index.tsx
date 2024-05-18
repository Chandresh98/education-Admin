'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    MdDashboardCustomize,
    MdExpandLess,
    MdExpandMore,
    MdPeople,
} from 'react-icons/md'
import { IoMdArrowRoundBack } from 'react-icons/io'
import SidebarLinkGroup from './SidebarLinkGroup'
import axios from '@/lib/axios'
import data from '@/source/sidebar.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getValidSubdomain } from '@/lib/utils'

interface sidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: (arg: boolean) => void
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: sidebarProps) => {
    const pathname = usePathname()
    const sidebar = useRef<any>(null)
    const trigger = useRef<any>(null)
    const [navModule, setNavModule] = useState<any>(null)

    let storedSidebarExpanded = true

    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : (storedSidebarExpanded = true),
    )

    useEffect(() => {
        const handleModule = () => {
            if (getValidSubdomain()) {
                setNavModule(data.admin)
            } else {
                setNavModule(data.superadmin)
            }
            // setNavModule(data.superadmin)
        }

        if (!navModule) handleModule()
    }, [])

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return
            setSidebarOpen(false)
        }
        document.addEventListener('mousedown', clickHandler)
        return () => {
            document.removeEventListener('mousedown', clickHandler)
        }
    })

    useEffect(() => {
        const keyHandler = ({ key }: KeyboardEvent) => {
            if (!sidebarOpen || key !== 'Escape') return
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler)
        return () => document.removeEventListener('keydown', keyHandler)
    })

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded')
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded')
        }
    }, [sidebarExpanded])

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0  z-9999 flex h-screen w-72.5 flex-col overflow-x-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
                sidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 ">
                <Link href="/dashboard">
                    <Image
                        width={80}
                        height={25}
                        src={'/images/logo/logo-w.png'}
                        alt="Logo"
                        priority
                    />
                </Link>
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden">
                    <IoMdArrowRoundBack />
                </button>
            </div>
            {/* Sidebar Header Ends */}
            {/* Sidebar content */}
            <div>
                {/* Sidebar Nav */}
                <nav>
                    {/* Menu */}
                    <div>
                        {/* <h3>Main</h3> */}
                        <ul>
                            {navModule &&
                                navModule.map((item: any, index: number) => {
                                    if (item.children?.length === 0) {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    href={item.url}
                                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-semibold text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                        pathname === item.url &&
                                                        'bg-graydark dark:bg-meta-4'
                                                    }`}>
                                                    <i
                                                        className={
                                                            item.icon
                                                        }></i>

                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    } else {
                                        return (
                                            <SidebarLinkGroup
                                                activeCondition={
                                                    pathname === item.slug ||
                                                    pathname.includes(item.slug)
                                                }>
                                                {(handleClick, open) => {
                                                    return (
                                                        <React.Fragment>
                                                            <Link
                                                                href="#"
                                                                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                                    (pathname ===
                                                                        item.url ||
                                                                        pathname.includes(
                                                                            item.url,
                                                                        )) &&
                                                                    'bg-graydark dark:bg-meta-4'
                                                                }`}
                                                                onClick={e => {
                                                                    e.preventDefault()
                                                                    sidebarExpanded
                                                                        ? handleClick()
                                                                        : setSidebarExpanded(
                                                                              true,
                                                                          )
                                                                }}>
                                                                <i
                                                                    className={
                                                                        item.icon
                                                                    }></i>
                                                                <div className="relative w-full flex justify-between items-center gap-2.5">
                                                                    <span>
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </span>
                                                                    {open ? (
                                                                        <MdExpandMore />
                                                                    ) : (
                                                                        <MdExpandLess />
                                                                    )}
                                                                </div>
                                                            </Link>
                                                            <div
                                                                className={`translate transform overflow-hidden ${
                                                                    !open &&
                                                                    'hidden'
                                                                }`}>
                                                                <ul className="mb-5.5 mt-2 flex flex-col gap-2.5 pl-6">
                                                                    {item.children &&
                                                                        item?.children.map(
                                                                            (
                                                                                sub: any,
                                                                                index: number,
                                                                            ) => {
                                                                                return (
                                                                                    <li
                                                                                        key={
                                                                                            index
                                                                                        }>
                                                                                        <Link
                                                                                            href={`${item.url}/${sub.url}`}
                                                                                            className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                                                                                pathname ===
                                                                                                    `/${item.url}/${sub.url}` &&
                                                                                                'text-white'
                                                                                            }`}>
                                                                                            <span>
                                                                                                {
                                                                                                    sub.name
                                                                                                }
                                                                                            </span>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            },
                                                                        )}
                                                                </ul>
                                                            </div>
                                                        </React.Fragment>
                                                    )
                                                }}
                                            </SidebarLinkGroup>
                                        )
                                    }
                                })}
                        </ul>
                    </div>
                    {/* Menu Ends */}
                </nav>
                {/* Sidebar Nav Ends */}
            </div>
            {/* Sidebar content Ends */}
        </aside>
    )
}

export default Sidebar
