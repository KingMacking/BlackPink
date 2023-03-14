import mixMatchImage from '../../../../assets/image/mixmatch.png'

const MixMatch = () => {
    return (
        <div className="flex flex-col px-16 mb-32 font-principal">
            <h3 className="mb-8 text-4xl font-bold text-black">Mix & Match</h3>
            <p className='mb-10 text-xl text-black'>Elegí tu outfit favorito</p>
            <div className='flex flex-wrap w-full gap-8 lg:flex-nowrap'>
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