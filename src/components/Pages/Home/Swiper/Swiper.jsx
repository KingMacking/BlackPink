import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper';
  // Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerImage from '../../../../assets/image/bannerHome.png'
import { Link } from "react-router-dom";

const SwiperHome = () => {
    return (
        <Swiper className="w-full h-auto min-h-[470px] hidden md:block mb-32" pagination={{type: "bullets"}} navigation={true} modules={[Navigation, Pagination]}>
            <SwiperSlide className="text-center flex justify-center items-center relative min-h-[470px] h-auto">
                <img src={bannerImage} className="object-cover w-full h-full" />
                <div className="absolute flex flex-col items-center -translate-x-1/2 left-1/4">
                    <h2 className="text-[82px] italic font-principal font-bold">Sale</h2>
                    <p className="text-5xl italic font-bold">hasta</p>
                    <h2 className="text-[82px] italic font-principal font-bold">50% OFF</h2>
                    <Link className="px-24 py-4 text-2xl font-semibold bg-white rounded-full font-principal" >Ver más</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="flex items-center justify-center text-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
        </Swiper>
    )
}
export default SwiperHome