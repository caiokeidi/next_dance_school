'use client';
import { useRouter } from "next/navigation";

interface INavbarMenuItens {}
export const NavbarMenuItens = (props:INavbarMenuItens) => {
    const router = useRouter()
    const onLogoutFunction = () => {
        console.log('teste')
    }

    const NavBarButton = ({label, onClick}:{label: string, onClick:()=>void}) => {
        return(
            <button 
                className="cursor-pointer 
                    button flex flex-row
                    text-gray-800 hover:text-gray-500 active:text-gray-950
                    w-full p-4 md:p-2 text-base
                    font-normal
                    active:relative 
                    no-underline"
                onClick={() => {onClick()}}
            >
                {label}
            </button>
        )
    }

    return(
        <ul className="
            flex flex-col md:flex-row 
            justify-start items-start
            list-none 
            h-full w-full
            md:gap-10
        ">
            <li>
              <NavBarButton
                label="Cursos"
                onClick={() => {router.push('/courses')}} 
              />
            </li>
            <li> 
              <NavBarButton
                label="A Escola"
                onClick={() => {router.push('/courses')}} 
              />
            </li>
            <li> 
              <NavBarButton
                label="Professores"
                onClick={() => {router.push('/courses')}} 
              />
            </li>
            <li> 
              <NavBarButton
                label="Contato"
                onClick={() => {router.push('/courses')}} 
              />
            </li>
            <li>
              <NavBarButton
                label="Sair"
                onClick={() => {onLogoutFunction()}} 
              />
            </li>
        </ul>
    )
}