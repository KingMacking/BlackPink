
const Doubts = () => {
    return (
        <div className="flex flex-col justify-center">
            <div>
                <h1 className="font-bold text-[1.5rem] font-principal mb-10 text-center">¿Te quedaron dudas?</h1>
            </div>
            <div className="text-center mt-[1rem]">
                <a className="hover:bg-white hover:text-[#E6A1B4] duration-200 shadow-[0_1px_10px_rgba(0,0,0,0.3)] text-principal text-[1.7rem] font-bold bg-black text-white rounded-[4rem] px-[10rem] py-4 " href="https://api.whatsapp.com/send?phone=Tu-n%C3%B9mero-aqu%C3%AD" target={'_blank'}>Consultanos por WhatsApp</a>
            </div>
        </div>
    )
}

export default Doubts