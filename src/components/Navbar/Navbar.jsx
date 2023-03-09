import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import blackPinkLogo from '../../assets/logo.png'
import useScrollPosition from '../../hooks/useScrollPosition'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

const Navbar = () => {
    const scrollPosition = useScrollPosition()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`bg-white flex p-6 ${scrollPosition !== 0 ? "lg:justify-between items-center px-20 lg:px-10 sticky z-50 top-0" : "lg:flex-col gap-4 px-20 z-50 lg:px-0 justify-between lg:justify-start items-center sticky top-0"} transition-all ease-in-out w-full`}>
            <div className='flex flex-col gap-2'>
                <img src={blackPinkLogo} className="w-full"/>
                <p>Compra mínima 10.000 pesos</p>
            </div>
            <nav className=' hidden lg:flex gap-24 items-center p-2'>
                <NavLink className="font-medium hover:underline underline-offset-4 transition-all ease-in-out">Colección</NavLink>
                <NavLink className="font-medium hover:underline underline-offset-4 transition-all ease-in-out">Cómo comprar</NavLink>
                <NavLink className="font-medium hover:underline underline-offset-4 transition-all ease-in-out">Sobre nosotros</NavLink>
                <NavLink className="font-medium hover:underline underline-offset-4 transition-all ease-in-out">Contacto</NavLink>
            </nav>

            {isOpen ? <RxCross2 className='text-4xl lg:hidden' onClick={() => setIsOpen(false)}/> : <RxHamburgerMenu className='text-4xl lg:hidden' onClick={() => setIsOpen(true)}/>}

            <nav className={`fixed flex w-full flex-col pt-32 top-32 lg:hidden overflow-y-auto bottom-0 gap-8 p-6 bg-black pl-4 duration-200 ${isOpen ? "left-0" : "left-[-100%]"}`}>
                <NavLink className="font-medium">Colección</NavLink>
                <NavLink className="font-medium">Cómo comprar</NavLink>
                <NavLink className="font-medium">Sobre nosotros</NavLink>
                <NavLink className="font-medium">Contacto</NavLink>
            </nav>
        </div>
    )
}
export default Navbar