import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import HomePortfolio from '../components/HomeComponents/Portfolio/HomePortfolio';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules'; // Correct import for v10+

const home = () => {
    return (
        <div className="Home-Page -z-10 h-screen overflow-hidden">
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={0}
                speed={1000}
                mousewheel={{
                    sensitivity: 1,
                    thresholdDelta: 5,
                    releaseOnEdges: true
                }}
                pagination={{ clickable: true }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper h-screen w-full"
            >
                <SwiperSlide className='h-screen overflow-hidden'><Banner /></SwiperSlide>
                <SwiperSlide className='h-screen overflow-y-auto no-scrollbar'><MyExpertise /></SwiperSlide>
                <SwiperSlide className='h-screen overflow-y-auto no-scrollbar'>
                    <HomePortfolio />
                    <Footer />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default home