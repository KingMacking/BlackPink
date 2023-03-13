import mixMatchImage from '../../../../assets/image/mixmatch.png'

const MixMatch = () => {
    return (
        <div className="px-16 flex flex-col mb-32 font-principal">
            <h3 className="text-black text-4xl font-bold mb-8">Mix & Match</h3>
            <p className='text-black text-xl mb-10'>Elegí tu outfit favorito</p>
            <div className='flex gap-8 w-full flex-wrap lg:flex-nowrap'>
                <div className='flex-grow'>
                    <img className="w-full" src={mixMatchImage}></img>
                </div>
                <div className='flex-grow'>
                    <img className="w-full" src={mixMatchImage}></img>
                </div>
                <div className='flex-grow'>
                    <img className="w-full" src={mixMatchImage}></img>
                </div>
            </div>
        </div>
    )
}
export default MixMatch