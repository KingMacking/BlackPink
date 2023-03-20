import arrowRigth from '../../../../assets/svg/arrowRight.svg'
import navigateImage from '../../../../assets/svg/howtobuyNavigation.svg'
import chooseImage from '../../../../assets/svg/howtobuyChoose.svg'
import clickImage from '../../../../assets/svg/howtobuyClick.svg'

const HowToBuyQuestions = () => {
    return (
        <div className="flex flex-col text-center">
            <div className="mb-10 text-4xl font-bold font-principal">
                <h1>Cómo Comprar</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-16 gap-8">
                <div className="text-xl flex flex-col grow basis-1/5 gap-4">
                    <p className="border-2 font-principal rounded-full w-8 h-8 flex justify-center items-center">1</p>
                    <img src={navigateImage} className='h-56'/>
                    <p><span className="text-xl font-bold font-principal">Navegá</span> por las cateforías y hacé click sobre el producto que te interese.</p>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <img src={arrowRigth} className="rotate-90 md:rotate-0"/>
                </div>
                <div className="text-xl flex flex-col grow basis-1/5 gap-4">
                    <p className="border-2 font-principal rounded-full w-8 h-8 flex justify-center items-center">2</p>
                    <img src={chooseImage} className='h-56'/>
                    <p><span className="text-xl font-bold font-principal">Elegí</span> el talle y el color de mayor preferencia. Si no concoces tu talle, podes utilizar nuestra guía de talles de referencia.</p>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <img src={arrowRigth} className="rotate-90 md:rotate-0"/>
                </div>
                <div className="text-xl flex flex-col grow basis-1/5 gap-4">
                    <p className="border-2 font-principal rounded-full w-8 h-8 flex justify-center items-center">3</p>
                    <img src={clickImage} className='h-56'/>
                    <p><span className="text-xl font-bold font-principal">Hacé</span> click en el botón comprar, este te dirigirá al WhatsApp de la empresa.</p>
                </div>
            </div>
        </div>
    )
}

export default HowToBuyQuestions