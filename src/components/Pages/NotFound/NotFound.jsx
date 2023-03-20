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
            <section className="flex md:flex-row flex-col font-principal font-medium px-8 md:px-16 w-full mx-auto justify-center mb-16">
                <div>
                    <img src={badGatewayImage} />
                </div>
                <div className='flex flex-col gap-4 justify-end mb-5'>
                    <h1 className='text-4xl'>¡Ay, no!</h1>
                    <div className='text-xl'>
                        <p>No encontramos la página que estás buscando.</p>
                        <p>¡Lo sentimos mucho!</p>
                    </div>
                    <p className='text-xl'>Quizás alguno de estos links ayude:</p>
                </div>
            </section>
            <section className='flex justify-center lg:flex-row flex-col flex-wrap gap-8 w-full px-8 md:px-0 md:w-1/2 mx-auto mb-16'>
                {links.map(link => {
                    return <Link key={link.url} className='bg-pinkCta rounded-full md:grow md:basis-1/3 py-4 text-white text-center font-bold hover:scale-105 hover:bg-pinkWhite hover:text-pinkCta transition-all ease-in-out duration-200' to={link.url} target={link.target ? link.target : "_self"}>{link.name}</Link>
                })}
            </section>
        </main>
    )
}
export default NotFound