const Shipping = () => {
    return (
    <div className="flex flex-col ">
        <div className="mb-10 text-4xl font-bold text-center font-principal">
            <h1>Envíos</h1>
        </div>
        <div className="flex flex-col items">
            <h1 className="text-xl font-bold font-principal">Envíos a domicilio</h1>
            <p className="my-3 text-xl font-bold font-principal">Córdoba: $450</p>
            <p className="text-xl"><span className="text-xl font-bold font-principal">Resto del país:</span> consultanos dentro de 48hs entrega</p>
        </div>
        <div className="my-10">
            <p className="text-xl">El envío sale <span className="text-xl font-bold font-principal">lunes a sábado</span> (Feriados y domingo no)</p>
        </div>
    </div>
    )
}

export default Shipping