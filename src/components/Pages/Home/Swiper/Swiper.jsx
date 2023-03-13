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
                <div className="absolute left-1/4 -translate-x-1/2 flex flex-col items-center">
                    <h2 className="text-[82px] italic font-principal font-bold">Sale</h2>
                    <p className="font-bold text-5xl italic">hasta</p>
                    <h2 className="text-[82px] italic font-principal font-bold">50% OFF</h2>
                    <Link className="font-principal text-2xl py-4 px-24 bg-white rounded-full font-semibold" >Ver más</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
            <SwiperSlide className="text-center flex justify-center items-center"><img src={bannerImage} className="object-cover w-full" /></SwiperSlide>
        </Swiper>
    )
}
export default SwiperHome