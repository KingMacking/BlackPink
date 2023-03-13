const PopularCard = ({name, price, priceType, colors, image}) => {
    return (
        <article className="flex flex-col gap-4 flex-grow font-principal">
            <div>
                <img className="w-full" src={image}></img>
            </div>
            <div className="flex gap-4 w-full justify-between">
                <div className="flex flex-col">
                    <p className="text-xl text-clip">{name}</p>
                    <p className="flex gap-4 items-center">${price}<span className="bg-black rounded-full px-4 text-white">{priceType}</span></p>
                </div>
                <div className="w-28 flex flex-wrap justify-end gap-x-2 gap-y-2">
                    {colors.map((color) => {
                        return <div style={{backgroundColor: color}} key={color} className={`w-5 h-5 rounded-full border`}></div>
                    })}
                </div>
            </div>
        </article>
    )
}
export default PopularCard