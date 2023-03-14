import { BsCartCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBuy = () => {
    
    return(
            <div className='flex justify-center my-10'>
                <Link className='mx-5 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal'to={'/howtobuy'}>
                    <BsCartCheck className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Cómo comprar</p>
                </Link>
                <Link className='mx-5 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal' to={'/howtobuy/paymentmethods'}>
                    <BsCartCheck className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Métodos de pago</p>
                </Link>
                <Link className='mx-5 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal' to={'/howtobuy/changesreturns'}>
                    <BsCartCheck className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Cambios y devoluciones</p> 
                </Link>
                <Link className='mx-5 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal' to={'/howtobuy/shipping'}>
                    <BsCartCheck className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Envíos</p>
                </Link>
            </div>
    )
}

export default NavBuy