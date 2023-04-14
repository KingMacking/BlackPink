import sizesPant from '../../../assets/svg/sizesPant.svg'
import sizesShirt from '../../../assets/svg/sizesShirt.svg'
import sizesCoat from '../../../assets/svg/sizesCoat.svg'
import useScroll from '../../../hooks/useScroll'

const SizesTable = () => {
    const scrollPosition = useScroll()
    return (
        <main className={`flex flex-col ${scrollPosition > 180 && "mt-32"} bg-white`}>
            <header className="flex justify-center mt-32 mb-10"><h1 className="w-fit font-principal text-4xl font-medium">Tabla de talles</h1></header>
            <section className="bg-pinkWhite flex gap-16 px-4 md:px-32 py-16 justify-center flex-wrap">
                {
                    [sizesCoat, sizesPant, sizesShirt].map((sizeTable, index) => {
                        return <img className='w-fit' key={index} src={sizeTable} />
                    })
                }
            </section>
            <footer className='bg-pinkWhite mb-32 flex justify-center'>
                <p className='italic font-principal pb-16 px-16'>Las medidas pueden variar entre 1 y 2 centímetros, según la persona y la metodología utilizada para medir.</p>
            </footer>
        </main>
    )
}
export default SizesTable