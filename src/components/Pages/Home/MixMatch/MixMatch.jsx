import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import mixMatchImage from '../../../../assets/image/mixmatch.png'

const MixMatch = () => {
    return (
        <div className="flex flex-col px-4 py-32 md:px-16 font-principal bg-pinkWhite">
            <h3 className="flex gap-8 mb-8 text-4xl font-medium text-black">Mix&Match<span className='text-pinkCta'><Icon icon="mdi:star-four-points-outline" inline={true}/></span></h3>
            <p className='mb-10 text-xl text-black'>Elegí tu outfit favorito y te ayudamos a tenerlo</p>
            <div className='flex flex-wrap w-full gap-8 lg:flex-nowrap'>
                <Link className='flex-grow transition-transform ease-in-out hover:scale-105' to="/mixmatch/1">
                    <img className="w-full" src={mixMatchImage}></img>
                </Link>
                <Link className='flex-grow transition-transform ease-in-out hover:scale-105' to="/mixmatch/2">
                    <img className="w-full" src={mixMatchImage}></img>
                </Link>
                <Link className='flex-grow transition-transform ease-in-out hover:scale-105' to="/mixmatch/3">
                    <img className="w-full" src={mixMatchImage}></img>
                </Link>
            </div>
        </div>
    )
}
export default MixMatch