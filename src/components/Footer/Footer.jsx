import "./Footer.css"
import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="lg:flex lg:justify-around bg-black p-20">
            <div className="text-white flex flex-col justify-center lg:justify-start">
                <img src={logo} alt="logo"/>
                <p className="mt-2 lg:mt-4 flex justify-center lg:justify-start">© Blackp:nk 2013</p>
            </div>
            <div className="text-white flex flex-col">
                <h1 className="text-xl font-bold mt-5 lg:mt-0 flex justify-center lg:justify-start">Informacion</h1>
                <div className="flex flex-col items-center lg:items-start">
                    <Link className="my-1 mt-4 lg:my-2 lg:mt-4" to={'/'}>Preguntas frecuentes</Link>
                    <Link className="my-1 lg:my-2" to={'/'}>Métodos de pago</Link>
                    <Link className="my-1 lg:my-2" to={'/'}>Envíos</Link>
                    <Link className="my-1 lg:my-2" to={'/'}>Cambios y devoluciones</Link>
                </div>
            </div>
            <div className="text-white flex flex-col items-center lg:items-start">
                <h1 className="text-xl font-bold lg:mt-0 mt-4">Corrientes 226, Córdoba Capital, Argentina</h1>
                <p className="my-1 mt-4 lg:my-2 lg:mt-4">Hararios: </p>
                <p className="my-1">Lunes a viernes de 9hs a 18hs</p>
                <p className="my-1">Sábado de 9hs a 14hs</p>
            </div>
        </div>
    )
}
export default Footer