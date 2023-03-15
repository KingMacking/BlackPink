import { BsCartCheck } from 'react-icons/bs'
import { GoCreditCard } from 'react-icons/go'
import { GiHanger } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'

const NavBuy = ({setActive, active}) => {
    
    return(
        <div className='flex justify-center my-10'>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal ${active === "howToBuy" && "underline"}`}
            onClick={() => setActive('howToBuy')}>
                <BsCartCheck className='w-12 h-12'/>
                <p className='mt-4'>Cómo comprar</p>
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal ${active === "paymentMethods" && "underline"}`}
            onClick={() => setActive('paymentMethods')}>
                <GoCreditCard className='w-12 h-12'/>
                <p className='mt-4'>Métodos de pago</p>
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal ${active === "changeReturns" && "underline"}`}
            onClick={() => setActive('changeReturns')}>
                <GiHanger className='w-12 h-12'/>
                <p className='mt-4'>Cambios y devoluciones</p> 
            </div>
            <div className={`flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal ${active === "shipping" && "underline"}`}
            onClick={() => setActive('shipping')}>
                <FaShippingFast className='w-12 h-12'/>
                <p className='mt-4'>Envíos</p>
            </div>
        </div>
    )
}

export default NavBuy