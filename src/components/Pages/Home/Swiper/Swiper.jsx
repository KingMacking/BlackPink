import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
  // Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerImage from '../../../../assets/image/bannerHome.png'

const SwiperHome = () => {
    return (
        <Swiper className="hidden w-full h-1/2 md:block" pagination={{type: "bullets"}} effect={"fade"} autoplay={true} modules={[Navigation, Pagination, EffectFade, Autoplay]}>
            <SwiperSlide className="relative flex items-center justify-center w-full text-center">
                <img src={bannerImage} className="object-cover w-full" />
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
        </Swiper>
    )
}
export default SwiperHome