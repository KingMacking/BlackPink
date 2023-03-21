import { useState } from "react"
import Modal from "../Modal/Modal"

const ProductDetail = ({product}) => {
    const [isBuying, setIsBuyign] = useState(false)

    return (
        <div className="flex flex-col w-full gap-8 px-4 md:px-16 xl:flex-row">
            <div className="w-full xl:w-2/3">
                <img className="w-full" src={product.image} alt={product.name} />
            </div>
            <div className="flex flex-col w-full gap-6 xl:w-1/3 font-principal">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl">{product.name}</h3>
                    <p className="text-3xl font-bold">${product.price}</p>
                    <p className="flex justify-center px-4 text-white rounded-full bg-darkGrey w-fit">{product.priceType}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="flex justify-between w-full text-lg">Colores</p>
                    <div className="flex gap-2">
                        {product.colors.map((color) => {
                            return <div style={{backgroundColor: color}} key={color} className={`w-7 h-7 rounded-full border mt-1`}></div>
                        })}
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <p className="flex justify-between w-full text-lg">Talles<a href="" className="font-semibold text-md text-pinkCta hover:underline underline-offset-2">Ver tabla de talles</a></p>
                    <div className="flex gap-2">
                        {product.sizes.map((size) => {
                            return <span key={size} className="w-10 h-10 px-3 py-2 font-bold text-center rounded-md text-pinkCta bg-pinkWhite">{size}</span>
                        })}
                    </div>
                </div>

                <a onClick={() => setIsBuyign(true)} className="px-10 py-4 text-center text-white rounded-full bg-pinkCta hover:scale-105 transition-all ease-in-out" href={`https://wa.me/5493518557030?text=Hola!%20Me%20interesa%20el%20producto%20${product.name}`} target="_blank">Comprar</a>

                <div>
                    <p className="mb-3 text-lg border-b-2 w-fit">Descripción</p>
                    <p className="text-sm">{product.description}</p>    
                </div>
            </div>
            <Modal show={isBuying} onClose={() => setIsBuyign(false)}/>
        </div>
    )
}

export default ProductDetail