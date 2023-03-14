import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import HowToBuy from "./components/Pages/NavQuestions/HowToBuy";
import Products from "./components/Pages/Products/Products";
import ProductDetailContainer from "./components/Pages/ProductDetailContainer/ProductDetailContainer";

function App() {
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
