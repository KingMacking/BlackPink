const Shipping = () => {
    return (
    <div className="flex flex-col ">
        <div className="mb-10 lg:text-4xl text-[1.4rem] font-bold text-center font-principal">
            <h1>Envíos</h1>
        </div>
        <div className="flex flex-col items lg:pt-10 lg:pb-10 pb-5 items-center lg:px-0 px-8">
            <h1 className="lg:text-2xl text-[1.2rem] font-bold font-principal">Envíos a domicilio</h1>
            <p className="my-3 lg:text-2xl text-[1.2rem] font-bold font-principal">Córdoba: $450</p>
            <p className="text-xl text-center"><span className="text-xl font-bold font-principal">Resto del país:</span> consultanos dentro de 48hs entrega</p>
        </div>
        <div className="my-10 lg:px-0 px-8">
            <p className="text-xl text-center">El envío sale <span className="text-xl font-bold font-principal">lunes a sábado</span> (Feriados y domingo no)</p>
        </div>
    </div>
    )
}

export default Shipping