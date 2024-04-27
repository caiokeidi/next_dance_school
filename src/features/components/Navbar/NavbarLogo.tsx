"use client"
import { useRouter } from "next/navigation"

const NavbarLogo = () => {
  const router = useRouter()
  return (
    <div className="cursor-pointer" onClick={() => {router.push('/')}}>
      <img 
        src="/media/img/next-logo.png"
        className="bg-white w-auto h-[64px]" 
      />
    </div>
  )
}

export default NavbarLogo