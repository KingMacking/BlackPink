import { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../ProductCard/ProductCard'
import fetchProducts from '../utils/fetchProducts'


const Popular = () => {
    const [popularItems, setPopularItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts("/data/products.json")
            setPopularItems(data.filter(product => product.popular === true))
        }
        fetchData()
    }, [])

    return (
        <section className='flex flex-col px-4 mb-32 md:px-16'>
            <h3 className="mb-16 text-4xl font-bold text-black font-principal">Populares</h3>
            <Swiper className='flex justify-between w-full gap-16' slidesPerView={"auto"} autoplay={false} pagination={{clickable: true,}} navigation={true} modules={[Navigation, Autoplay]} >
                {
                    popularItems?.length > 0 ?
                        popularItems?.map((item) => {
                            return (
                                <SwiperSlide key={item.id} className="flex items-center justify-center md:grow md:basis-1/2 xl:basis-1/3">
                                    <ProductCard  id={item.id} name={item.name} image={item.image} price={item.price} priceType={item.priceType} colors={item.colors} />
                                </SwiperSlide>
                            )
                        })
                    :
                        <h3 className='text-xl font-principal'>No hay productos populares en este momento</h3>
                }
            </Swiper>
        </section>
    )
}
export default Popular