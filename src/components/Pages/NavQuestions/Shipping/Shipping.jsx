const Shipping = () => {
    return (
    <div className="flex flex-col ">
        <div className="font-bold text-[2.5rem] font-principal mb-10 text-center">
            <h1>Envíos</h1>
        </div>
        <div className="flex flex-col  items">
            <h1 className="text-[1.2rem] font-principal font-bold">Envíos a domicilio</h1>
            <p className="text-[1.2rem] font-principal font-bold my-3">Córdoba: $450</p>
            <p className="text-[1.2rem]"><span className="text-[1.2rem] font-principal font-bold">Resto del país:</span> consultanos dentro de 48hs entrega</p>
        </div>
         <div className="my-10">
            <p className="text-[1.2rem]">El envío sale <span className="text-[1.2rem] font-principal font-bold">lunes a sábado</span> (Feriados y domingo no)</p>
        </div>
    </div>
    )
}

export default Shipping