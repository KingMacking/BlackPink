import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useScroll from '../../../hooks/useScroll'
import FollowUs from '../../FollowUs/FollowUs'
import ProductDetail from '../../ProductDetail/ProductDetail'
import fetchProducts from '../../utils/fetchProducts'

import mixMatchCool from '../../../assets/image/mixmatchCool.png'
import mixMatchPreppy from '../../../assets/image/mixmatchPreppy.png'
import mixMatchCute from '../../../assets/image/mixmatchCute.png'

const mixMatchImages = [mixMatchCool, mixMatchPreppy, mixMatchCute]

const MixMatch = () => {
    const [products, setProducts] = useState()
    const {productsMix} = useParams()
    const scrollPosition = useScroll()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts("/data/products.json")
            setProducts(data.filter(product => product.mixGroup.includes(parseInt(productsMix))))
        }
        fetchData()
    }, [])

    return (
        <main className={`h-auto ${scrollPosition > 180 && "mt-32"} bg-pinkWhite md:px-16`}>
            <div className='flex flex-col lg:justify-between lg:gap-16 lg:flex-row'>
                <div className='flex flex-col items-center h-full gap-8 mt-16 lg:sticky top-48'>
                    <h2 className='flex items-center gap-4 text-4xl font-medium font-principal'>Mix&Match <span className='text-pinkCta'><Icon icon="mdi:star-four-points-outline" inline={true}/></span></h2>
                    <img className='w-fit h-fit' src={mixMatchImages[parseInt(productsMix) - 1]} />
                </div>
                <div className='flex flex-col items-center w-full gap-16 py-16 mt-16 bg-white rounded-3xl'>
                    {
                        products?.map(product => {
                            return <ProductDetail product={product}/>
                        })
                    }
                    <a className='w-1/2 py-4 text-2xl text-center text-white transition-all ease-in-out rounded-full bg-pinkCta hover:scale-105 hover:cursor-pointer font-principal'>Comprar todo</a>
                </div>
            </div>
            <FollowUs />
        </main>
    )
}
export default MixMatch