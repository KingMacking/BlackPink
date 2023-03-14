import popularImage from '../../../../assets/image/popular.png'
import ProductCard from '../../../ProductCard/ProductCard'

//Sirve de testeo, mas adelante la idea seria colocarlo en un archivo aparte en una carpeta data por ejemplo.
const popularItems = [
    {
        name: "Conjunto buzo + jogging",
        price: 7200,
        priceType: "Mayorista",
        image: popularImage,
        colors: ["#1A7404", "#C28AF9", "#8ACBF9"],
    },
    {
        name: "Sweater",
        price: 3200,
        priceType: "Mayorista",
        image: popularImage,
        colors: ["#1A7404", "#C28AF9", "#8ACBF9", "#FC65E4", "#171717", "#FED9B6"],
    },
    {
        name: "Saco",
        price: 2880,
        priceType: "Mayorista",
        image: popularImage,
        colors: ["#1A7404", "#C28AF9", "#FED9B6"],
    },
]


const Popular = () => {
    return (
        <section className='flex flex-col px-16 mb-32'>
            <h3 className="mb-16 text-4xl font-bold text-black font-principal">Populares</h3>
            <div className='flex flex-wrap w-full gap-8 lg:flex-nowrap'>
                {popularItems.map((item, index) => {
                    return <ProductCard key={index} name={item.name} image={item.image} price={item.price} priceType={item.priceType} colors={item.colors} />
                })}
            </div>
        </section>
    )
}
export default Popular