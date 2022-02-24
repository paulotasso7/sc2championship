import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay } from "swiper";   

import TeamCard from "../Cards/TeamCard";
import './TeamCarousel.css';



const TeamCarousel = () => {
    return (
        <>
        <div className="team-title">
            <h1 style={{color:'white',paddingLeft: '20px', borderLeft:'6px solid', marginLeft: '30px', borderColor: '#6b54b6'}}>MEET THE NOIAS</h1>
        </div>

        <Swiper
        className='carousel-size'
        spaceBetween={45}
        slidesPerView={4}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        centerInsufficientSlides={true}
        centeredSlides={false}
        centeredSlidesBounds={true}
        autoplay={true}
        speed={300}
        style={{width: '60%', display:'flex'}}
        modules={[Autoplay]}
        >
            <SwiperSlide>
                <TeamCard/>
            </SwiperSlide>
            <SwiperSlide>
                <TeamCard/>
            </SwiperSlide>
            <SwiperSlide>
                <TeamCard/>
            </SwiperSlide>
            <SwiperSlide>
                <TeamCard/>
            </SwiperSlide>
        </Swiper>
        
        </>

    )
}

export default TeamCarousel;
