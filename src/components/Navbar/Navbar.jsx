import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import blackPinkLogo from '../../assets/image/logo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import useScroll from '../../hooks/useScroll'
import { Icon } from '@iconify/react'

const Navbar = () => {
    const scrollPosition = useScroll()
    const [isOpen, setIsOpen] = useState(false)
    const [categoriesVisibility, setCategoriesVisibility] = useState(false)
    const location = useLocation()

    return (
        <>
            <div className={`z-50 flex px-4 py-6 lg:p-6 ${scrollPosition > 180 ? `justify-center lg:justify-between items-center px-20 lg:px-16 bg-white sticky top-0` : `lg:flex-col gap-4 px-20 lg:px-0  justify-center lg:justify-start items-center`} ${location.pathname === "/" ? "md:fixed top-0 bg-transparent" : "bg-white"} transition-all ease-in-out w-full duration-500`}>
                <Link className='flex flex-col gap-2 justify-self-center lg:justify-self-start' to="/">
                    <img src={blackPinkLogo} className="w-full"/>
                    <p className='text-sm italic font-principal md:text-base'>Compra mínima 10.000 pesos</p>
                </Link>
                <nav className='items-center hidden gap-16 p-2 lg:flex'>
                    <div className="relative flex gap-4 font-bold transition-all ease-in-out hover:underline hover:text-pinkLogo hover:cursor-pointer underline-offset-4 font-principal group">
                        Catálogo
                        <Icon className='transition-all duration-200 ease-in-out -rotate-90 group-hover:rotate-90 group-hover:mt-2' icon="material-symbols:arrow-back-ios-rounded" inline={true} />
                        <div className='absolute z-50 hidden h-auto group-hover:md:block hover:md:block font-principal top-4'>
                            <div className='py-3'>
                                <div className='absolute w-4 h-4 mt-1 rotate-45 bg-white left-4'></div>
                            </div>
                            <div className='flex flex-col w-32 h-auto gap-4 p-3 bg-white rounded-md shadow-lg'>
                                <Link className='font-normal text-black hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products">Ver todo</Link>
                                <Link className='font-normal text-black hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products/abrigos">Abrigos</Link>
                                <Link className='font-normal text-black hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products/polleras">Polleras</Link>
                            </div>
                        </div>
                    </div>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-4 font-principal", isActive && "hover:underline text-pinkLogo rounded-full bg-pinkWhite bg-opacity-20 p-2"].join(" ")} to="/howtobuy">Cómo comprar</NavLink>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-4 font-principal", isActive && "hover:underline text-pinkLogo rounded-full bg-pinkWhite bg-opacity-20 p-2"].join(" ")} to="/aboutus">Sobre nosotros</NavLink>
                    <NavLink className={({isActive}) => ["font-bold transition-all ease-in-out hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-4 font-principal", isActive && "hover:underline text-pinkLogo rounded-full bg-pinkWhite bg-opacity-20 p-2"].join(" ")} to="/contact">Contacto</NavLink>
                </nav>

                {isOpen ? <RxCross2 className='absolute text-4xl lg:hidden text-pinkLogo right-4' onClick={() => setIsOpen(false)}/> : <RxHamburgerMenu className='absolute text-4xl lg:hidden text-pinkLogo right-4' onClick={() => setIsOpen(true)}/>}

                <nav className={`fixed flex w-full flex-col items-center mt-[7.5rem] top-0 z-50 lg:hidden overflow-y-auto bottom-0 gap-2 py-4 px-8 bg-white border-t border-pinkCta duration-200 ${isOpen ? "left-0" : "left-[-100%]"}`}>
                    <button onClick={() => setCategoriesVisibility(!categoriesVisibility)} className={`flex items-center ${categoriesVisibility && "first:gap-2"} justify-between font-principal underline-offset-4 border-b border-b-lightGrey w-full py-2 last:border-b-0`}>
                        <span className='hover:text-pinkLogo'>Catálogo</span>
                        <Icon className={`${!categoriesVisibility && "-rotate-90"} transition-all ease-in-out duration-200 text-xl`} icon="material-symbols:arrow-back-ios-rounded" inline={true} />
                    </button>
                    <div className={`${categoriesVisibility ? "flex" : "hidden"} flex-col w-full gap-2 border-b border-b-lightGrey py-4`}>
                        <Link className='font-normal hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products">Ver todo</Link>
                        <Link className='font-normal hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products/abrigos">Abrigos</Link>
                        <Link className='font-normal hover:underline hover:decoration-pinkLogo hover:text-pinkLogo underline-offset-2' to="/products/polleras">Polleras</Link>
                    </div>
                    <NavLink className={({isActive}) => ["font-principal underline-offset-4 border-b border-b-lightGrey w-full py-2 last:border-b-0", isActive && "underline text-pinkLogo"].join(" ")} to="/howtobuy">Cómo comprar</NavLink>
                    <NavLink className={({isActive}) => ["font-principal underline-offset-4 border-b border-b-lightGrey w-full py-2 last:border-b-0", isActive && "underline text-pinkLogo"].join(" ")} to="/aboutus">Sobre nosotros</NavLink>
                    <NavLink className={({isActive}) => ["font-principal underline-offset-4 border-b border-b-lightGrey w-full py-2 last:border-b-0", isActive && "underline text-pinkLogo"].join(" ")} to="/contact">Contacto</NavLink>
                </nav>
            </div>
        </>
    )
}
export default Navbar