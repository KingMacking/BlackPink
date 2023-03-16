const Doubts = () => {
    return (
        <div className="flex flex-col justify-center lg:p-20 p-16">
            <div>
                <h1 className="mb-10 lg:text-[1.3rem] text-[1.1rem]  text-center font-principal">¿Te quedaron dudas?</h1>
            </div>
            <div className="lg:mt-4 m text-center">
                <a className="hover:bg-white hover:text-[#E6A1B4] duration-200 shadow-[0_1px_10px_rgba(0,0,0,0.3)] text-principal lg:text-[1.5rem] text-[1rem] font-bold bg-[#DD5491] text-white rounded-full m-full lg:px-10 px-5  py-4" href="https://api.whatsapp.com/send?phone=Tu-n%C3%B9mero-aqu%C3%AD" target={'_blank'}>Consultanos por WhatsApp</a>
            </div>
        </div>
    )
}

export default Doubts