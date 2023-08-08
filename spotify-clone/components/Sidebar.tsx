"use client";

import { usePathname } from "next/navigation"
import { useMemo } from "react";
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"

interface SidebarProps{
    children: React.ReactNode
}

// Using children as a means to pass server components through client components
const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname == '/search',
            href: '/search'
        }
    ], [pathname])

    return (
        
        <div>{children}</div>
    )
}

export default Sidebar