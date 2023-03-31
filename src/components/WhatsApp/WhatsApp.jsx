import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
    return (
        <a href="https://wa.me/5493518557030" className='fixed w-14 lg:w-20 h-14 lg:h-20 bottom-8 lg:bottom-12 right-4 lg:right-12 bg-[#DD5491] text-white rounded-full text-4xl lg:text-5xl z-100  flex justify-center items-center shadow-[0_1px_10px_rgba(0,0,0,0.3)] hover:text-[#DD5491] hover:bg-white transition-all ease-in-out' target='_blank'>
            <BsWhatsapp/>
        </a>
    )
}

export default WhatsApp