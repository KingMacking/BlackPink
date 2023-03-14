import newHome1 from '../../../../assets/image/newHome1.png'
import newHome2 from '../../../../assets/image/newHome2.png'

const NewCollections = () => {
    return (
        <section className="flex flex-wrap px-16 mb-32 gap-y-16 justify-evenly">
            <article className='relative'>
                <img src={newHome2}/>
                <div className='absolute flex flex-col bottom-10 left-8'>
                    <p className='text-3xl italic font-bold text-white font-principal'>nueva</p>
                    <p className='text-3xl italic font-bold text-white font-principal'>colección</p>
                </div>
            </article>
            <article className='relative'>
                <img src={newHome1}/>
                <div className='absolute flex flex-col bottom-10 left-8'>
                    <p className='text-3xl italic font-bold text-black font-principal'>nuevas</p>
                    <p className='text-3xl italic font-bold text-black font-principal'>faldas</p>
                </div>
            </article>
        </section>
    )
}
export default NewCollections