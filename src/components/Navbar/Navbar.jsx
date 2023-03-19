import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import blackPinkLogo from '../../assets/image/logo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import useScroll from '../../hooks/useScroll'

const Navbar = () => {
    const scrollPosition = useScroll()
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <>
            <div className={`z-50 flex px-4 py-6 lg:p-6 ${scrollPosition > 180 ? `justify-between items-center px-20 lg:px-16 bg-white sticky top-0` : `lg:flex-col gap-4 px-20 lg:px-0  justify-between lg:justify-start items-center`} ${location.pathname === "/" && "md:fixed top-0 bg-transparent"} transition-all ease-in-out w-full duration-500`}>
                <Link className='flex flex-col gap-2 justify-self-center md:justify-self-start' to="/">
                    <img src={blackPinkLogo} className="w-full"/>
                    <p className='italic font-principal text-sm md:text-base'>Compra mínima 10.000 pesos</p>
                </Link>
                <nav className='items-center hidden gap-16 p-2 lg:flex'>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline underline-offset-4 font-principal", isActive && "underline"].join(" ")} to="/collection">Colección</NavLink>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline underline-offset-4 font-principal", isActive && "underline"].join(" ")} to="/howtobuy">Cómo comprar</NavLink>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline underline-offset-4 font-principal", isActive && "underline"].join(" ")} to="/aboutus">Sobre nosotros</NavLink>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline underline-offset-4 font-principal", isActive && "underline"].join(" ")} to="/contact">Contacto</NavLink>
                </nav>

                {isOpen ? <RxCross2 className='text-4xl lg:hidden' onClick={() => setIsOpen(false)}/> : <RxHamburgerMenu className='text-4xl lg:hidden' onClick={() => setIsOpen(true)}/>}

                <nav className={`fixed flex w-full flex-col items-center mt-28 top-0 z-50 lg:hidden overflow-y-auto bottom-0 gap-8 p-6 bg-white border-t pl-4 duration-200 ${isOpen ? "left-0" : "left-[-100%]"}`}>
                    <NavLink className={({isActive}) => ["font-bold font-principal underline-offset-4", isActive && "underline"].join(" ")} to="/collection">Colección</NavLink>
                    <NavLink className={({isActive}) => ["font-bold font-principal underline-offset-4", isActive && "underline"].join(" ")} to="/howtobuy">Cómo comprar</NavLink>
                    <NavLink className={({isActive}) => ["font-bold font-principal underline-offset-4", isActive && "underline"].join(" ")} to="/aboutus">Sobre nosotros</NavLink>
                    <NavLink className={({isActive}) => ["font-bold font-principal underline-offset-4", isActive && "underline"].join(" ")} to="/contact">Contacto</NavLink>
                </nav>
            </div>
        </>
    )
}
export default Navbar