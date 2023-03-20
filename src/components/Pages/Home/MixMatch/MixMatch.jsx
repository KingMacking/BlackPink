import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import mixMatchCool from '../../../../assets/image/mixmatchCool.png'
import mixMatchPreppy from '../../../../assets/image/mixmatchPreppy.png'
import mixMatchCute from '../../../../assets/image/mixmatchCute.png'

const MixMatch = () => {
    return (
        <div className="flex flex-col px-4 py-32 mt-20 md:px-16 font-principal bg-pinkWhite lg:mt-32">
            <h3 className="flex gap-8 mb-8 text-4xl font-medium text-black">Mix&Match<span className='text-pinkCta'><Icon icon="mdi:star-four-points-outline" inline={true}/></span></h3>
            <p className='mb-10 text-xl text-black'>Elegí tu outfit favorito y te ayudamos a tenerlo</p>
            <Swiper className='flex justify-between w-full gap-16 overflow-visible' slidesPerView={"auto"} autoplay={false} pagination={{clickable: true,}} navigation={true} modules={[Navigation, Autoplay]} >
                <SwiperSlide className="flex items-center justify-center px-4 md:px-0 md:grow md:basis-1/2 xl:basis-1/4">
                    <Link className='flex items-center justify-center transition-transform ease-in-out grow lg:basis-1/4 hover:scale-105' to="/mixmatch/1">
                        <img className="w-full md:w-2/3" src={mixMatchCool}></img>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center px-4 md:px-0 md:grow md:basis-1/2 xl:basis-1/4">
                    <Link className='flex items-center justify-center transition-transform ease-in-out grow lg:basis-1/4 lg:w-fit hover:scale-105' to="/mixmatch/2">
                        <img className="w-full md:w-2/3" src={mixMatchPreppy}></img>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center px-4 md:px-0 md:grow md:basis-1/2 xl:basis-1/4">
                    <Link className='flex items-center justify-center transition-transform ease-in-out grow lg:basis-1/4 lg:w-fit hover:scale-105' to="/mixmatch/3">
                        <img className="w-full md:w-2/3" src={mixMatchCute}></img>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default MixMatch