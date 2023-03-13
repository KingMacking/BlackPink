import newHome1 from '../../../../assets/image/newHome1.png'
import newHome2 from '../../../../assets/image/newHome2.png'

const NewCollections = () => {
    return (
        <section className="flex flex-wrap gap-y-16 px-16 justify-evenly mb-32">
            <article className='relative'>
                <img src={newHome2}/>
                <div className='absolute bottom-10 left-8 flex flex-col'>
                    <p className='text-white text-3xl font-principal font-bold italic'>nueva</p>
                    <p className='text-white text-3xl font-principal font-bold italic'>colección</p>
                </div>
            </article>
            <article className='relative'>
                <img src={newHome1}/>
                <div className='absolute bottom-10 left-8 flex flex-col'>
                    <p className='text-black text-3xl font-principal font-bold italic'>nuevas</p>
                    <p className='text-black text-3xl font-principal font-bold italic'>faldas</p>
                </div>
            </article>
        </section>
    )
}
export default NewCollections