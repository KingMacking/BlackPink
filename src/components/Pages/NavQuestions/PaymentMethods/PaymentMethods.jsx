const PaymentMethods = () => {
    return (
        <div className="flex flex-col ">
            <div className="font-bold text-[2.5rem] font-principal mb-10 text-center">
                <h1>Métodos de pago</h1>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col  items">
                    <h1 className="text-[1.5rem] font-principal font-bold">Mayorista</h1>
                    <p className="text-[1.2rem]">Efectivo o depósito por transferencia</p>
                </div>
                <div className="my-10">
                    <h1 className="text-[1.5rem] font-principal font-bold">Minorista</h1>
                    <p className="text-[1.2rem]">Efectivo, dpebito o crpedito (con un 10% de recargo).</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods