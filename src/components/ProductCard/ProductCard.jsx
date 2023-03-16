import { Link, useLocation } from "react-router-dom"

const ProductCard = ({name, price, priceType, colors, image, id}) => {
    const location = useLocation()
    console.log(location.pathname.split("/"));

    return (
        <Link className={`flex flex-col w-full gap-2 transition-all ease-in-out sm:w-3/4 group md:gap-4 font-principal lg:w-fit ${location.pathname.split("/")[1] === "products" && "grow basis-1/4"}`} to={`/detail/${id}`} preventScrollReset={false}>
            <div className="shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]">
                <img className="w-full" src={image}></img>
            </div>
            <div className="flex justify-between w-full gap-1 lg:gap-4">
                <div className="flex flex-col gap-2 w-36 sm:w-60 md:w-36 lg:w-60">
                    <h3 className="text-sm truncate lg:text-xl group-hover:underline underline-offset-2">{name}</h3>
                    <p className="flex text-[12px] lg:text-xl items-center gap-4">${price}<span className="px-4 text-white bg-pinkLogo rounded-full">{priceType}</span></p>
                </div>
                <div className="flex flex-wrap justify-end w-24 gap-x-2 lg:w-28 lgap-y-2">
                    {colors.map((color) => {
                        return <div style={{backgroundColor: color}} key={color} className={`w-[14px] h-[14px] lg:w-5 lg:h-5 rounded-full border mt-1`}></div>
                    })}
                </div>
            </div>
        </Link>
    )
}
export default ProductCard