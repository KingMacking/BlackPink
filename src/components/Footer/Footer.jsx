import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom"
import { SiGooglemaps } from "react-icons/si"

const Footer = () => {
    return (
        <div className="p-20 bg-black lg:flex lg:justify-around">
            <div className="flex flex-col justify-center text-white lg:justify-start">
                <img src={logo} alt="logo"/>
                <p className="flex justify-center mt-2 lg:mt-4 lg:justify-start">© Blackp:nk 2023</p>
            </div>
            <div className="flex flex-col items-center text-white lg:items-start">
                <a href="https://goo.gl/maps/PA61pzkBY241snXXA" target="_blank" className="flex mt-4 text-xl font-bold lg:mt-0 hover:underline underline-offset-4">
                    <SiGooglemaps className="text-pinkWhite"/>
                    <p className="mx-2">Corrientes 226, Córdoba Capital, Argentina</p>
                </a>
                <p className="my-1 mt-4 lg:my-2 lg:mt-4">Hararios: </p>
                <p className="my-1">Lunes a viernes de 9hs a 18hs</p>
                <p className="my-1">Sábado de 9hs a 14hs</p>
            </div>
            <div className="flex flex-col text-white">
                <h1 className="flex justify-center mt-5 text-xl font-bold lg:mt-0 lg:justify-start">Informacion</h1>
                <div className="flex flex-col items-center lg:items-start">
                    <Link className="my-1 mt-4 lg:my-2 text-pinkLogo lg:mt-4 hover:underline underline-offset-4" to={'/'}>Preguntas frecuentes</Link>
                    <Link className="my-1 lg:my-2 text-pinkLogo hover:underline underline-offset-4" to={'/'}>Métodos de pago</Link>
                    <Link className="my-1 lg:my-2 text-pinkLogo hover:underline underline-offset-4" to={'/'}>Envíos</Link>
                    <Link className="my-1 lg:my-2 text-pinkLogo hover:underline underline-offset-4" to={'/'}>Cambios y devoluciones</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer