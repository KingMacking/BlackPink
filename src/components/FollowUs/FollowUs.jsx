import { BsInstagram } from 'react-icons/bs'
import backgroundImage from '../../assets/image/1.png'

const FollowUs = () => {
    return (
        <div className='flex flex-col items-center gap-12 px-4 md:px-10 py-16 lg:px-4 lg:py-32'>
            <a href='https://www.instagram.com/bpink.cba/' target="_blank" className='relative transition-all duration-200 ease-in-out w-fit hover:scale-110 hover:cursor-pointer'>
                <img src={backgroundImage} className="w-full md:w-96"/>
                <BsInstagram className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-pinkWhite opacity-80 text-[75px]'/>
            </a>
        </div>
    )
}
export default FollowUs