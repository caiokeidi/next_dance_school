'use client'
import { NavbarMenuItens } from "./NavMenuItens"

interface INavbarMenu {
    handleShowNavbar?:any;
}
export const NavbarMenu = (props:INavbarMenu) => {
    return(
    <>
      <div 
        className="flex md:hidden justify-center cursor-pointer" 
        onClick={props.handleShowNavbar}
      >
          <img src='/media/img/icons/dots-horizontal.svg' />
      </div>
      <div className={`
          hidden
          md:flex
          text-gray-900
          h-full
      `}>
          <NavbarMenuItens/>
      </div>
    </>
    )
}