import { Link } from "react-router-dom"

const ProductCard = ({name, price, priceType, colors, image, id}) => {
    return (
        <Link className="flex flex-col gap-4 flex-grow font-principal basis-[30%] hover:scale-105 transition-all ease-in-out" to={`/detail/${id}`} preventScrollReset={false}>
            <div>
                <img className="w-full" src={image}></img>
            </div>
            <div className="flex justify-between w-full gap-4">
                <div className="flex flex-col">
                    <h3 className="text-xl truncate">{name}</h3>
                    <p className="flex items-center gap-4">${price}<span className="px-4 text-white bg-black rounded-full">{priceType}</span></p>
                </div>
                <div className="flex flex-wrap justify-end w-28 gap-x-2 gap-y-2">
                    {colors.map((color) => {
                        return <div style={{backgroundColor: color}} key={color} className={`w-5 h-5 rounded-full border mt-1`}></div>
                    })}
                </div>
            </div>
        </Link>
    )
}
export default ProductCard