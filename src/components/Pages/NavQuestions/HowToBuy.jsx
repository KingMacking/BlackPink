import NavBuy from "./NavBuy/NavBuy"
import { useParams } from "react-router"
import HowToBuyQuestions from "./HowToBuyQuestions/HowToBuyQuestions"
import Shipping from './Shipping/Shipping'
import PaymentMethods from './PaymentMethods/PaymentMethods'
import ChangesReturns from './ChangesReturns/ChangesReturns'
import { useEffect, useState } from "react"

const HowToBuy = () => {

    let { questions } = useParams

    const [changeQuestions, setChangeQuestions] = useState()

    useEffect (() => {

        if (!changeQuestions) {
            return (
                setChangeQuestions(<HowToBuy/>)
            )
        }

    }, [questions])


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center my-10'>
                <NavBuy/>
            </div>
            <div className='flex justify-center my-10'>
                {
                  
                }
            </div>
        </div>
    )
}

export default HowToBuy