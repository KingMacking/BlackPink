import HowToBuyQuestions from "./HowToBuyQuestions/HowToBuyQuestions"
import Shipping from './Shipping/Shipping'
import PaymentMethods from './PaymentMethods/PaymentMethods'
import ChangesReturns from './ChangesReturns/ChangesReturns'
import { useState } from "react"
import Doubts from './Doubts/Doubts'
import FollowUs from '../../FollowUs/FollowUs'
import NavBuy from './NavBuy/NavBuy'

const HowToBuy = () => {

    const [active, setActive] = useState("Primero")

    return (
        <div className='flex flex-col'>
            <div>
                <NavBuy setActive={setActive}/>
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