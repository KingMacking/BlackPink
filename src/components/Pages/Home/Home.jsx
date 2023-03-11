import useScroll from "../../../hooks/useScroll"
import FollowUs from "../../FollowUs/FollowUs"
import SwiperHome from "../../Swiper/Swiper"

const Home = () => {
    const scrollPosition = useScroll()
    return (
        <div className={`h-[1500px] ${scrollPosition > 150 && "mt-32"}`}>
            <SwiperHome />
            <FollowUs />
        </div>
    )
}
export default Home