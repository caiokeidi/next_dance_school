'use client';
import { useRouter } from "next/navigation";

interface INavbarMenuItens {}
export const NavbarMenuItens = (props:INavbarMenuItens) => {
    const router = useRouter()
    const onLogoutFunction = () => {
        console.log('teste')
    }

    return(
        <ul className="
            flex flex-col md:flex-row 
            justify-between items-center
            list-none 
            h-full
            md:gap-10
        ">
            <li>
                <button 
                    className="cursor-pointer 
                        button flex flex-row
                        w-full p-4 md:p-2 text-base
                        font-normal active:font-semibold
                        active:relative 
                        no-underline"
                    onClick={() => {router.push('/courses')}}
                >
                    Cursos
                </button>
            </li>
            <li> 
                <button 
                    className="cursor-pointer 
                        button flex flex-row
                        w-full p-4 md:p-2 text-base
                        font-normal active:font-semibold
                        active:relative 
                        no-underline"
                    onClick={() => {router.push('/courses')}}
                >
                    A Escola
                </button>
            </li>
            <li>
                <button 
                    className="cursor-pointer 
                        button flex flex-row
                        w-full p-4 md:p-2 text-base
                        font-normal active:font-semibold
                        active:relative 
                        no-underline"
                    onClick={() => {onLogoutFunction()}}
                >
                    Sair
                </button>
            </li>
        </ul>
    )
}