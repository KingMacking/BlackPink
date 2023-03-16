import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=Tu-n%C3%B9mero-aqu%C3%AD" className='fixed w-[3rem] lg:w-[5rem] h-[3rem] lg:h-[5rem] bottom-[2rem] lg:bottom-[3rem] right-[1rem] lg:right-[3rem] bg-pinkCta text-[white] rounded-[4rem] text-[2rem] lg:text-[3rem] z-100  flex justify-center items-center shadow-[0_0px_7px_rgba(232,127,155,0.5)] hover:text-pinkCta hover:bg-white z-50 ease-in-out transition-colors' target='_blank'>
            <BsWhatsapp/>
        </a>
    )
}

export default WhatsApp