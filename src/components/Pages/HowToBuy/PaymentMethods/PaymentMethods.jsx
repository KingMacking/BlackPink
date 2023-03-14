const PaymentMethods = () => {
    return (
        <div className="flex flex-col ">
            <div className="mb-10 text-4xl font-bold text-center font-principal">
                <h1>Métodos de pago</h1>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col items">
                    <h1 className="text-2xl font-bold font-principal">Mayorista</h1>
                    <p className="text-xl">Efectivo o depósito por transferencia</p>
                </div>
                <div className="my-10">
                    <h1 className="text-2xl font-bold font-principal">Minorista</h1>
                    <p className="text-xl">Efectivo, dpebito o crpedito (con un 10% de recargo).</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods