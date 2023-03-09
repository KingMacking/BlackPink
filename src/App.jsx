import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import WhatsApp from "./components/WhatsApp/WhatsApp";

function App() {
    return (
        <>
            <Navbar />
            <WhatsApp/>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
