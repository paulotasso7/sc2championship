import './Home.css';
import TeamCarousel from '../../Components/TeamCarousel/TeamCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow,  } from 'swiper';
import 'swiper/css';

const Home = ( ) => {

    return (
        <>
        <div className='carousel-bg'>
            <Swiper
            className='carousel-size'
            spaceBetween={400}
            slidesPerView={2}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            centerInsufficientSlides={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            autoplay={true}
            speed={500}
            >
            
                <SwiperSlide>
                    <div className='box-content'>
                        <img  className='carousel-img'  alt='teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-1-1.jpg' />
                        <img className='carousel-logo' alt='logo-teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-2-2.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box-content'>
                        <img  className='carousel-img' alt='teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-3-1.jpg' />
                        <img className='carousel-logo' alt='logo-teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-3-2.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box-content'>
                        <img className='carousel-img' alt='teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-2-1.jpg' />
                        <img className='carousel-logo' alt='logo-teste' src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/h3-slide-1-2.png' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
            
            <video className='video-banner' loop={true} autoPlay={true} playsInline={true} muted={true} >
                <source src="https://www.mmsupports.club/static/media/banner1.fa3ddde7.mp4" type="video/mp4"/>
                <source src="/static/media/banner1.4c4a31e1.webm" type="video/webm"/>
            </video>
            <TeamCarousel/>
        </>
    )
};

export default Home;