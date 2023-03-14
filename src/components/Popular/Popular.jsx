import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'


const Popular = () => {
    const [popularItems, setPopularItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:5173/data/products.json")
        .then(res => res.json())
        .then(data => data.filter(product => product.popular === true))
        .then(popProds => setPopularItems(popProds.sort(() => Math.random()- 0.5).slice(0, 3)))
        console.log(popularItems);
    }, [])

    return (
        <section className='flex flex-col px-16 mb-32'>
            <h3 className="mb-16 text-4xl font-bold text-black font-principal">Populares</h3>
            <div className='flex flex-wrap w-full gap-8 lg:flex-nowrap'>
                {
                    popularItems.length > 0 ?
                        popularItems.map((item) => {
                            return <ProductCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} priceType={item.priceType} colors={item.colors} />
                        })
                    :
                        <h3 className='text-xl font-principal'>No hay productos populares en este momento</h3>
                }
            </div>
        </section>
    )
}
export default Popular