import { BsCartCheck } from 'react-icons/bs'
import { GoCreditCard } from 'react-icons/go'
import { GiHanger } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'

const NavBuy = ({setActive, active}) => {
    
    return(
        <div className='flex justify-center px-4 pt-5 lg:pt-10'>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer p-1 mx-1  lg:mx-9 hover:underline hover:text-pinkCta underline-offset-4 font-principal ${active === "howToBuy" && "underline text-pinkCta"}`}
            onClick={() => setActive('howToBuy')}>
                <BsCartCheck className='lg:text-[4rem] text-[2rem]'/>
                <p className='mt-4 text-[0.8rem] lg:text-[1rem] text-center'>Cómo comprar</p>
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer p-1 mx-1  lg:mx-9 hover:underline hover:text-pinkCta underline-offset-4 font-principal ${active === "paymentMethods" && "underline  text-pinkCta"}`}
            onClick={() => setActive('paymentMethods')}>
                <GoCreditCard className='lg:text-[4rem] text-[2rem]'/>
                <p className='mt-4 text-[0.8rem] lg:text-[1rem] text-center'>Métodos de pago</p>
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer p-1 mx-1  lg:mx-9 hover:underline hover:text-pinkCta underline-offset-4 font-principal ${active === "changeReturns" && "underline  text-pinkCta"}`}
            onClick={() => setActive('changeReturns')}>
                <GiHanger className='lg:text-[4rem] text-[2rem]'/>
                <p className='mt-4 text-[0.8rem] lg:text-[1rem] text-center'>Cambios y devoluciones</p> 
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer p-1 mx-1  lg:mx-9 hover:underline hover:text-pinkCta underline-offset-4 font-principal ${active === "shipping" && "underline  text-pinkCta"}`}
            onClick={() => setActive('shipping')}>
                <FaShippingFast className='lg:text-[4rem] text-[2rem]'/>
                <p className='mt-4 text-[0.8rem] lg:text-[1rem] text-center'>Envíos</p>
            </div>
        </div>
    )
}

export default NavBuy