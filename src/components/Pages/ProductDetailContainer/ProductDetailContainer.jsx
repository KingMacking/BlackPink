import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from '../../ProductDetail/ProductDetail'
import useScroll from "../../../hooks/useScroll"
import Popular from "../../Popular/Popular"
import FollowUs from "../../FollowUs/FollowUs"

const ProductDetailContainer = () => {
    const scrollPosition = useScroll()
    const { productId } = useParams()
    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5173/data/products.json")
        .then(res => res.json())
        .then(data => {
            setProductInfo(data.find(product => product.id === parseInt(productId)))
        })
    }, [productId])

    return (
        <main className={`h-auto ${scrollPosition > 180 ? "mt-48" : "mt-16"}`}>
            {
                !productInfo ? <h2>No existe el producto</h2> :
                
                <ProductDetail product={productInfo}/>
            }
            <Popular/>
            <FollowUs />
        </main>
    )
}

export default ProductDetailContainer