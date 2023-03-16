import HowToBuyQuestions from "./HowToBuyQuestions/HowToBuyQuestions"
import Shipping from './Shipping/Shipping'
import PaymentMethods from './PaymentMethods/PaymentMethods'
import ChangesReturns from './ChangesReturns/ChangesReturns'
import { useState } from "react"
import Doubts from './Doubts/Doubts'
import FollowUs from '../../FollowUs/FollowUs'
import NavBuy from './NavBuy/NavBuy'
import useScroll from "../../../hooks/useScroll"

const HowToBuy = () => {

    const [active, setActive] = useState("howToBuy")
    const scrollPosition = useScroll()

    return (
        <main className={`flex flex-col ${scrollPosition > 180 && "mt-32"} bg-white`}>
            <div>
                <NavBuy setActive={setActive} active={active}/>
            </div>
            <div className='flex justify-center my-10'>
                {active === 'howToBuy' && <HowToBuyQuestions />}
                {active === 'paymentMethods' && <PaymentMethods />}
                {active === 'changeReturns' && <ChangesReturns />}
                {active === 'shipping' && <Shipping />}
            </div>
            <div className='my-16'>
                <Doubts/>
            </div>
            <div className='mt-4'>
                <FollowUs/>
            </div>
        </main>
    )
}

export default HowToBuy