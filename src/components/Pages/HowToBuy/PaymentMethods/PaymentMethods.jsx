const PaymentMethods = () => {
    return (
        <div className="flex flex-col ">
            <div className="mb-10 lg:text-4xl text-[1.4rem] font-bold text-center font-principal">
                <h1>Métodos de pago</h1>
            </div>
            <div className="flex flex-col lg:pt-10">
                <div className="flex flex-col justify-center items-center lg:pb-10 pb-5">
                    <h1 className="lg:text-2xl text-[1.2rem] font-bold font-principal lg:pb-5 pb-3">Mayorista</h1>
                    <p className="lg:text-xl text-[1rem]">Efectivo o depósito por transferencia</p>
                </div>
                <div className="lg:my-10 my-6 lg:px-0 px-10 flex flex-col items-center">
                    <h1 className="lg:text-2xl text-[1.2rem] font-bold font-principal pb-5">Minorista</h1>
                    <p className="lg:text-xl text-[1rem] ">Efectivo, debito o credito (con un 10% de recargo).</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods