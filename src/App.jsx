import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import HowToBuy from "./components/Pages/HowToBuy/HowToBuy";
import Products from "./components/Pages/Products/Products";
import ProductDetailContainer from "./components/Pages/ProductDetailContainer/ProductDetailContainer";
import { useEffect } from "react";

function App() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])

    return (
        <>
            <Navbar />
            <WhatsApp/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/howtobuy" element={<HowToBuy />}/>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productsCategory" element={<Products />} />
                <Route path="/detail/:productId" element={<ProductDetailContainer/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
