import modalImage from '../../assets/svg/modalImg.svg'
import arrorRight from '../../assets/svg/arrowRight.svg'

const Modal = ({show, onClose}) => {
    return (
        <>
            {
                show &&
                <div className="fixed left-0 top-0 right-0 bottom-0 bg-black bg-opacity-80 flex items-center justify-center" onClick={onClose}>
                    <div className="w-[300px] md:w-[600px] bg-white rounded-lg shadow-lg py-6 px-8 font-principal font-medium flex items-center flex-col" onClick={e => e.stopPropagation()}>
                        <img src={modalImage}/>
                        <h4 className='text-4xl flex items-center gap-6'>¡Allá vamos! <span><img src={arrorRight} /></span></h4>
                        <p>Te estamos redirigiendo a nuestro Whatsapp...</p>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal