"use client"
import { useState } from "react"
import { NavbarMenu } from "./NavbarMenu"
import { NavbarMenuItens } from "./NavMenuItens"
import { useRouter } from "next/navigation"
import NavbarLogo from "./NavbarLogo"

export const Navbar = () => {    
    const router = useRouter()
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return(
        <div className="w-full relative">
            <nav
                className={
                    `
                    w-full h-max 
                    flex flex-row justify-between
                    relative
                    p-4 z-[5]
                    bg-white
                    drop-shadow-lg
                    rounded-b-lg
                    `
                }
            >
                <NavbarLogo />
                <NavbarMenu
                    handleShowNavbar={handleShowNavbar}
                />
                
            </nav>
            {/* Responsive Menu */}
            <div className={`
              h-auto overflow-hidden
              flex
              sm:hidden 
              absolute right-0 top-[80px]
              bg-white 
              w-0 px-4 py-5
              z-[4]
              ${showNavbar && 'active'}
            `}>
                <NavbarMenuItens/>
            </div>
        </div>
    )
}
