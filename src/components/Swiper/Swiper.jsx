import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
  // Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerImage from '../../assets/image/bannerHome.png'

const SwiperHome = () => {
    return (
        <Swiper className="w-full h-auto" pagination={{type: "bullets"}} navigation={true} modules={[Navigation, Pagination]}>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
        </Swiper>
    )
}
export default SwiperHome