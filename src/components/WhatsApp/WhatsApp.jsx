import { BsWhatsapp } from 'react-icons/bs'

const WhatsApp = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=Tu-n%C3%B9mero-aqu%C3%AD" className='fixed w-[3rem] lg:w-[5rem] h-[3rem] lg:h-[5rem] bottom-[2rem] lg:bottom-[3rem] right-[1rem] lg:right-[3rem] bg-[#DD5491] text-[white] rounded-[4rem] text-[2rem] lg:text-[3rem] z-100  flex justify-center items-center shadow-[0_1px_10px_rgba(0,0,0,0.3)] hover:text-[#DD5491] hover:bg-white z-50' target='_blank'>
            <BsWhatsapp/>
        </a>
    )
}

export default WhatsApp