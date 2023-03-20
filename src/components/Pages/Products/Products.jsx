import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useScroll from "../../../hooks/useScroll"
import FollowUs from "../../FollowUs/FollowUs"
import ProductCard from "../../ProductCard/ProductCard"
import fetchProducts from "../../utils/fetchProducts"
import FilterBySelection from "./FilterBySelection/FilterBySelection"

const Products = () => {
    const [products, setProducts] = useState(null)
    const [category, setCategory] = useState()
    const scrollPosition = useScroll()
    const [order, setOrder] = useState()
    const {productsCategory} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts("/data/products.json")
            if(productsCategory){
                setProducts(data.filter(product => product.category === productsCategory))
                setCategory(productsCategory)
            } else {
                setProducts(data)
            }
        }
        fetchData()
    }, [productsCategory])

    useEffect(() => {
        if(order) {
            const alphabeticalOrderedProducts = products.sort((a, b) => {
                const nameA = a.name.split(' ').join('').toLowerCase()
                const nameB = b.name.split(' ').join('').toLowerCase()

                return nameA.localeCompare(nameB)

            }).map(product => product)

            const priceOrderedProducts = products.sort((a, b) => a.price - b.price)
            if(order === "priceAsc") {
                setProducts(priceOrderedProducts)
            } else if (order === "priceDesc") {
                setProducts([...priceOrderedProducts].reverse())
            } else if  (order === "nameAsc"){
                setProducts(alphabeticalOrderedProducts)
            } else if (order === "nameDesc") {
                setProducts([...alphabeticalOrderedProducts].reverse())
            }
        }
    }, [order])

    return (
        <main className={`h-auto px-8 md:px-32 ${scrollPosition > 180 && "mt-32"} bg-white`}>
            <div className="relative flex flex-col items-center w-full py-16 md:flex-row gap-y-4">
                <h2 className="w-full text-4xl font-bold text-center md:w-fit md:-translate-x-1/2 md:absolute font-principal md:left-1/2">{category ? category.charAt(0).toUpperCase() + category.slice(1) : "Todos"}</h2>
                <FilterBySelection setOrder={setOrder} />
            </div>
            <div className='flex flex-wrap justify-between gap-6 mb-32 lg:gap-4 gap-y-24'>
                {!products ? <h2>Loading</h2> :
                    products.map((product, index) => {
                        return <ProductCard key={index} id={product.id} name={product.name} image={product.image} price={product.price} priceType={product.priceType} colors={product.colors} />
                    })}
            </div>
            <FollowUs />
        </main>
    )
}
export default Products