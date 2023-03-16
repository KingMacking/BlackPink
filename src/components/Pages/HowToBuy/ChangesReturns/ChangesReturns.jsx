const ChangesReturns = () => {
    return (
    <div className="flex flex-col ">
        <div className="mb-10 lg:text-4xl text-[1.4rem] lg:px-0 px-10 font-bold text-center font-principal">
            <h1>Cambios y devoluciones</h1>
        </div>
        <div className="flex flex-col lg:pt-10">
            <div className="flex flex-col items-center">
                <h1 className="lg:text-2xl text-[1.2rem] font-bold font-principal lg:pb-10 pb-5">Mayorista</h1>
                <p className="lg:text-xl text-[1rem] lg:px-0 px-10 text-center">Solo tiene cambios jeans, camperas y sacos, por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
            <div className="my-10 flex flex-col items-center">
                <h1 className="lg:text-2xl text-[1.2rem] font-bold font-principal lg:pb-10 pb-5">Minorista</h1>
                <p className="lg:text-xl text-[1rem] lg:px-0 px-10 text-center">Todas las prendas tienen cambio por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
        </div>
    </div>
    )
}

export default ChangesReturns