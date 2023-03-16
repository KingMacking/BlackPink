import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mixMatchImage from '../../../assets/image/mixmatchtext.png'
import useScroll from '../../../hooks/useScroll'
import FollowUs from '../../FollowUs/FollowUs'
import ProductDetail from '../../ProductDetail/ProductDetail'

const MixMatch = () => {
    const [products, setProducts] = useState()
    const {productsMix} = useParams()
    const scrollPosition = useScroll()

    useEffect(() => {
        fetch("http://localhost:5173/data/products.json")
        .then(res => res.json())
        .then(data => {
            console.log(productsMix);
            console.log(data.map(product => product.mixGroup.includes(parseInt(productsMix))))
            setProducts(data.filter(product => product.mixGroup.includes(parseInt(productsMix))))
        })
    }, [])

    return (
        <main className={`h-auto ${scrollPosition > 180 && "mt-32"}`}>
            <div className='flex items-center justify-center my-32'>
                <img className='w-fit' src={mixMatchImage} />
            </div>
            <div className='flex flex-col'>
                {
                    products?.map(product => {
                        return <ProductDetail product={product}/>
                    })
                }
            </div>
            <div className='flex justify-center w-full px-16'>
                <a className='w-1/2 py-4 mb-32 text-2xl text-center text-white transition-all ease-in-out bg-black rounded-full hover:scale-105 hover:cursor-pointer font-principal'>Comprar todo</a>
            </div>
            <FollowUs />
        </main>
    )
}
export default MixMatch