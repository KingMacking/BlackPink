const ChangesReturns = () => {
    return (
    <div className="flex flex-col ">
        <div className="mb-10 text-4xl font-bold text-center font-principal">
            <h1>Cambios y devoluciones</h1>
        </div>
        <div className="flex flex-col">
            <div className="flex flex-col items">
                <h1 className="text-xl font-bold font-principal">Mayorista</h1>
                <p className="text-xl">Solo tiene cambios jeans, camperas y sacos, por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
            <div className="my-10">
                <h1 className="text-2xl font-bold font-principal">Minorista</h1>
                <p className="text-xl">Todas las prendas tienen cambio por el mismo modelo, por razón de talle o defectuoso, con la etiqueta puesta.</p>
            </div>
        </div>
    </div>
    )
}

export default ChangesReturns