import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductDetail from '../../ProductDetail/ProductDetail'
import useScroll from "../../../hooks/useScroll"
import Popular from "../../Popular/Popular"
import fetchProducts from "../../utils/fetchProducts"

const ProductDetailContainer = () => {
    const scrollPosition = useScroll()
    const { productId } = useParams()
    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts("/data/products.json")
            setProductInfo(data.find(product => product.id === parseInt(productId)))
        }
        fetchData()
    }, [productId])

    return (
        <main className={`bg-pinkWhite lg:p-16 px-0 py-16  h-auto ${scrollPosition > 180 && "mt-32"}`}>
            <div className="bg-white lg:p-16 p-5 shadow-[0_1px_10px_rgba(0,0,0,0.3)] rounded-3xl">
            {
                !productInfo ? <h2>No existe el producto</h2> :
                
                <ProductDetail product={productInfo}/>
            }
                <div className="py-16">
                    <Popular />
                </div>         
            </div>
        </main>
    )
}

export default ProductDetailContainer