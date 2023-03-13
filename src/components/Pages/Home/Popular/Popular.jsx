import popularImage from '../../../../assets/image/popular.png'
import PopularCard from './PopularCard/PopularCard'

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
        <section className='px-16 flex flex-col mb-32'>
            <h3 className="text-black text-4xl font-principal font-bold mb-16">Populares</h3>
            <div className='flex gap-8 w-full flex-wrap lg:flex-nowrap'>
                {popularItems.map((item, index) => {
                    return <PopularCard key={index} name={item.name} image={item.image} price={item.price} priceType={item.priceType} colors={item.colors} />
                })}
            </div>
        </section>
    )
}
export default Popular