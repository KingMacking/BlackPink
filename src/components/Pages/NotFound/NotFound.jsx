import { Link } from 'react-router-dom'
import badGatewayImage from '../../../assets/svg/404.svg'
import useScroll from '../../../hooks/useScroll'
const NotFound = () => {
    const scrollPosition = useScroll()
    const links = [
        {url: "/", name: "Home"},
        {url: "/howtobuy", name: "Preguntas frecuentes"},
        {url: "/products", name: "Nuestro catálogo"},
        {url: "https://www.whatsapp.com/catalog/5493518557030/?app_absent=0", name: "Atención por whatsapp", target: "_blank"},
    ]
    return (
        <main className={`h-auto ${scrollPosition > 180 && "mt-32"} bg-white overflow-hidden`}>
            <section className="flex flex-col justify-center w-full px-8 mx-auto mb-16 font-medium md:flex-row font-principal md:px-16">
                <div>
                    <img src={badGatewayImage} />
                </div>
                <div className='flex flex-col justify-end gap-4 mb-5'>
                    <h1 className='text-4xl'>¡Ay, no!</h1>
                    <div className='text-xl'>
                        <p>No encontramos la página que estás buscando.</p>
                        <p>¡Lo sentimos mucho!</p>
                    </div>
                    <p className='text-xl'>Quizás alguno de estos links ayude:</p>
                </div>
            </section>
            <section className='flex flex-col flex-wrap justify-center w-full gap-8 px-8 mx-auto mb-16 lg:flex-row md:px-0 md:w-1/2'>
                {links.map(link => {
                    return <Link key={link.url} className='py-4 font-bold text-center text-white transition-all duration-200 ease-in-out rounded-full bg-pinkCta md:grow md:basis-1/3 hover:scale-105 hover:bg-pinkWhite hover:text-pinkCta' to={link.url} target={link.target ? link.target : "_self"}>{link.name}</Link>
                })}
            </section>
        </main>
    )
}
export default NotFound