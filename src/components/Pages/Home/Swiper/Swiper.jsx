import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation} from 'swiper';
  // Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerW from '../../../../assets/image/bannerW.png'
import bannerB from '../../../../assets/image/bannerB.png'
import bannerWMobile from '../../../../assets/image/bannerW-mobile.png'
import bannerBMobile from '../../../../assets/image/bannerB-mobile.png'

const SwiperHome = () => {
    return (
        <Swiper className="w-full" on effect={"fade"} autoplay={true} loop={true} modules={[EffectFade, Autoplay]}>
            <SwiperSlide className="flex items-center justify-center w-full">
                <img src={bannerW} className="w-full object-cover hidden md:block" />
                <img src={bannerWMobile} className="w-full object-cover md:hidden" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center w-full">
                <img src={bannerB} className="w-full object-cover hidden md:block" />
                <img src={bannerBMobile} className="w-full object-cover md:hidden" />
            </SwiperSlide>
        </Swiper>
    )
}
export default SwiperHome