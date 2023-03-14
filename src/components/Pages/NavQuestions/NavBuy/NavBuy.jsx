import { BsCartCheck } from 'react-icons/bs'
import { GoCreditCard } from 'react-icons/go'
import { GiHanger } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'

const NavBuy = ({setActive}) => {
    
    return(
        <div className='flex justify-center my-10'>
            <div className='cursor-pointer mx-9 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal' 
            onClick={() => setActive('Primero')}>
                <BsCartCheck className='h-[3rem] w-[3rem]'/>
                <p className='mt-4'>Cómo comprar</p>
            </div>
            <div className='cursor-pointer mx-9 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal'
            onClick={() => setActive('Segundo')}>
                <GoCreditCard className='h-[3rem] w-[3rem]'/>
                <p className='mt-4'>Métodos de pago</p>
            </div>
            <div className='cursor-pointer mx-9 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal'
            onClick={() => setActive('Tercero')}>
                <GiHanger className='h-[3rem] w-[3rem]'/>
                <p className='mt-4'>Cambios y devoluciones</p> 
            </div>
            <div className='cursor-pointer mx-9 flex flex-col items-center font-bold hover:underline underline-offset-4 transition-all ease-in-out font-principal'
            onClick={() => setActive('Cuarto')}>
                <FaShippingFast className='h-[3rem] w-[3rem]'/>
                <p className='mt-4'>Envíos</p>
            </div>
        </div>
    )
}

export default NavBuy