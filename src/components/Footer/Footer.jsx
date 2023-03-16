import logo from "../../assets/image/logo.png"
import { Link } from "react-router-dom"
import { SiGooglemaps } from "react-icons/si"

const Footer = () => {
    return (
        <div className="lg:p-20 p-16 bg-black lg:flex lg:justify-around">
            <div className="flex flex-col justify-center text-white lg:justify-start">
                <img src={logo} alt="logo"/>
                <p className="flex justify-center mt-2 lg:mt-4 lg:justify-start">© Blackp:nk 2023</p>
            </div>
            <div className="flex justify-center lg:pt-0 pt-5">
                <div className="mx-2">
                    <SiGooglemaps className="text-pinkLogo lg:text-[2.5rem]  text-[2rem]"/>
                </div>
                <div className="flex flex-col items-start  text-white lg:items-start">
                    <a href="https://goo.gl/maps/PA61pzkBY241snXXA" target="_blank" className="mt-0  text-xl font-bold lg:mt-0 hover:underline underline-offset-4 flex">
                        <p>Corrientes 226, Córdoba Capital, Argentina</p>
                    </a>           
                    <p className="my-1 mt-4 lg:my-2 lg:mt-4">Hararios: </p>
                    <p className="my-1">Lunes a viernes de 9hs a 18hs</p>
                    <p className="my-1">Sábado de 9hs a 14hs</p>                   
                </div>
            </div>
            <div className="flex flex-col text-white ">
                <div className="flex flex-col items-center lg:items-start">
                <h1 className="flex justify-start mt-5 text-xl font-bold lg:mt-0 lg:justify-start">Informacion</h1>
                    <Link className="my-1 mt-4 lg:my-2 lg:mt-4 hover:underline underline-offset-4 text-pinkLogo" to={'/'}>Preguntas frecuentes</Link>
                    <Link className="my-1 lg:my-2 hover:underline underline-offset-4 text-pinkLogo" to={'/'}>Métodos de pago</Link>
                    <Link className="my-1 lg:my-2 hover:underline underline-offset-4 text-pinkLogo" to={'/'}>Envíos</Link>
                    <Link className="my-1 lg:my-2 hover:underline underline-offset-4 text-pinkLogo" to={'/'}>Cambios y devoluciones</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer