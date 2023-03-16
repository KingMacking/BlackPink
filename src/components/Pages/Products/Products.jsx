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
                console.log(nameA);
                console.log(nameB);
                    
                // names must be equal
                return nameA.localeCompare(nameB)
            }).map(product => product)
            console.log(alphabeticalOrderedProducts);
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
        <main className={`h-auto px-8 md:px-32 ${scrollPosition > 180 && "mt-32"}`}>
            <div className="relative flex items-center w-full my-16">
                <FilterBySelection setOrder={setOrder} />
                <h2 className="absolute text-4xl font-bold text-center -translate-x-1/2 font-principal left-1/2">{category ? category.charAt(0).toUpperCase() + category.slice(1) : "Todos"}</h2>
            </div>
            <div className='flex flex-wrap justify-between gap-8 mb-32 gap-y-24'>
                {!products ? <h2>Loading</h2> :
                    products.map((product, index) => {
                        return <ProductCard key={index} name={product.name} image={product.image} price={product.price} priceType={product.priceType} colors={product.colors} />
                    })}
            </div>
            <FollowUs />
        </main>
    )
}
export default Products