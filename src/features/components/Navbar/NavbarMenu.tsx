'use client'
import { NavbarMenuItens } from "./NavMenuItens"

interface INavbarMenu {
    handleShowNavbar?:any;
}
export const NavbarMenu = (props:INavbarMenu) => {
    return(
        <>
            <div>
                <div className={`
                    hidden
                    md:flex
                    text-gray-900
                    h-full
                `}>
                    <NavbarMenuItens/>
                </div>
            </div>
        </>
    )
}