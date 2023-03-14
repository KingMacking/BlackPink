
const ProductDetail = ({product}) => {
    return (
        <div className="flex px-16 mb-32 gap-4 w-full">
            <div className="w-1/2">
                <img className="w-full" src={product.image} alt={product.name} />
            </div>
            <div className="font-principal flex flex-col gap-6 w-1/3">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl">{product.name}</h3>
                    <p className="font-bold text-3xl">${product.price}</p>
                    <p className="rounded-full bg-black flex justify-center text-white w-fit px-4">{product.priceType}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-lg flex w-full justify-between">Colores</p>
                    <div className="flex gap-2">
                        {product.colors.map((color) => {
                            return <div style={{backgroundColor: color}} key={color} className={`w-5 h-5 rounded-full border mt-1`}></div>
                        })}
                    </div>
                </div>
                <div className="w-full gap-2 flex flex-col">
                    <p className="text-lg flex w-full justify-between">Talles<a className="text-md font-semibold">Ver tabla de talles</a></p>
                    <div className="flex gap-2">
                        {product.sizes.map((size) => {
                            return <span key={size} className="bg-black rounded-md py-2 px-3 w-10 h-10 text-white text-center">{size}</span>
                        })}
                    </div>
                </div>

                <a className="rounded-full bg-black text-white px-10 py-2 text-center" href="">Comprar</a>

                <div>
                    <p className="font-bold text-lg border-b-2 mb-3 w-fit px-2">Descripción</p>
                    <p className="text-sm">{product.description}</p>    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail