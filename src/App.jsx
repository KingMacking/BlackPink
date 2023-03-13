import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import WhatsApp from "./components/WhatsApp/WhatsApp";
import HowToBuy from "./components/Pages/NavQuestions/HowToBuy";

function App() {
    return (
        <>
            <Navbar />
            <WhatsApp/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/howtobuy" element={<HowToBuy />}/>
                <Route path="/howtobuy/:questions" element={<HowToBuy />}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
