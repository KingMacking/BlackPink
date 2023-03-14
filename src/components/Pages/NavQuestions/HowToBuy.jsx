import { BsCartCheck } from 'react-icons/bs'
import { GoCreditCard } from 'react-icons/go'
import { GiHanger } from 'react-icons/gi'
import { FaShippingFast } from 'react-icons/fa'
import HowToBuyQuestions from "./HowToBuyQuestions/HowToBuyQuestions"
import Shipping from './Shipping/Shipping'
import PaymentMethods from './PaymentMethods/PaymentMethods'
import ChangesReturns from './ChangesReturns/ChangesReturns'
import { useState } from "react"
import Doubts from './Doubts/Doubts'
import FollowUs from '../../FollowUs/FollowUs'

const HowToBuy = () => {

    const [active, setActive] = useState("Primero")

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center my-10'>
                <div className='flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal' 
                onClick={() => setActive("Primero")}>
                    <BsCartCheck className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Cómo comprar</p>
                </div>
                <div className='flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal'
                onClick={() => setActive("Segundo")}>
                    <GoCreditCard className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Métodos de pago</p>
                </div>
                <div className='flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal'
                onClick={() => setActive("Tercero")}>
                    <GiHanger className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Cambios y devoluciones</p> 
                </div>
                <div className='flex flex-col items-center font-bold transition-all ease-in-out cursor-pointer mx-9 hover:underline underline-offset-4 font-principal'
                onClick={() => setActive("Cuarto")}>
                    <FaShippingFast className='h-[3rem] w-[3rem]'/>
                    <p className='mt-4'>Envíos</p>
                </div>
            </div>
            <div className='flex justify-center my-10'>
                {active === 'Primero' && <HowToBuyQuestions />}
                {active === 'Segundo' && <PaymentMethods />}
                {active === 'Tercero' && <ChangesReturns />}
                {active === 'Cuarto' && <Shipping />}
            </div>
            <div className='my-[4rem]'>
                <Doubts/>
            </div>
            <div className='mt-[1rem]'>
                <FollowUs/>
            </div>
        </div>
    )
}

export default HowToBuy