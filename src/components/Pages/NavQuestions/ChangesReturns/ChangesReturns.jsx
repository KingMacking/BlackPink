const ChangesReturns = () => {
    return (
    <div className="flex flex-col ">
        <div className="font-bold text-[2.5rem] font-principal mb-10 text-center">
            <h1>Cambios y devoluciones</h1>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col  items">
                <h1 className="text-[1.5rem] font-principal font-bold">Mayorista</h1>
                <p className="text-[1.2rem]">Solo tiene cambios jeans, camperas y sacos, por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
            <div className="my-10">
                <h1 className="text-[1.5rem] font-principal font-bold">Minorista</h1>
                <p className="text-[1.2rem]">Todas las prendas tienen cambio por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
        </div>
    </div>
    )
}

export default ChangesReturns