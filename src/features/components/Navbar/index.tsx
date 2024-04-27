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
                    flex flex-row justify-between items-center
                    relative
                    p-4 md:px-8 z-[5]
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
              overflow-hidden 
              absolute right-0 top-0
              bg-white 
              px-4 py-5 h-screen
              rounded-l-lg
              shadow-[rgba(0,0,15,0.2)_0px_5px_4px_5px]
              z-[10]
              flex-col
              gap-2
              ${showNavbar ? 'w-auto min-w-[50%] md:hidden flex' : 'hidden'}
            `}>
                <div 
                  className="
                    w-full 
                    flex justify-end items-center
                    cursor-pointer 
                    p-4
                    text-gray-800 
                    text-sm
                    gap-8
                  " 
                  onClick={handleShowNavbar}
                >
                  <img 
                    className='w-6 h-6 opacity-50'
                    src='/media/img/icons/close--sm.svg' 
                  />
                </div>
                <NavbarMenuItens
                  handleShowNavbar={handleShowNavbar}
                />
            </div>
        </div>
    )
}
