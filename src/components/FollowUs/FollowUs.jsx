import { BsInstagram } from 'react-icons/bs'
import backgroundImage from '../../assets/image/1.png'

const FollowUs = () => {
    return (
        <div className='flex flex-col items-center gap-12'>
            <h3 className='text-2xl font-bold font-principal'>Seguinos</h3>
            <a href='https://www.instagram.com/bpink.cba/' target="_blank" className='relative w-fit hover:scale-110 hover:cursor-pointer transition-all ease-in-out duration-200'>
                <img src={backgroundImage} className='filter brightness-50'/>
                <img src={backgroundImage} className='absolute top-[47%] left-[53%] -translate-x-1/2 -translate-y-1/2'/>
                <BsInstagram className='absolute top-[47%] left-[53%] -translate-x-1/2 -translate-y-1/2 text-white opacity-80 text-[75px]'/>
            </a>
        </div>
    )
}
export default FollowUs