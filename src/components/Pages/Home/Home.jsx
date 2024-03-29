import useScroll from "../../../hooks/useScroll"
import FollowUs from "../../FollowUs/FollowUs"
import MixMatch from "./MixMatch/MixMatch"
import NewCollections from "./NewCollections/NewCollections"
import Popular from "../../Popular/Popular"
import SwiperHome from "./Swiper/Swiper"

const Home = () => {
    const scrollPosition = useScroll()
    return (
        <main className={`h-auto ${scrollPosition > 180 && "mt-32"} bg-white overflow-hidden`}>
            <SwiperHome />
            <NewCollections />
            <Popular />
            <MixMatch />
            <FollowUs />
        </main>
    )
}
export default Home