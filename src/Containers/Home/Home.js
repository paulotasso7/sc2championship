import './Home.css';
import TeamCarousel from '../../Components/TeamCarousel/TeamCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade   } from 'swiper';
import 'swiper/css';

const Home = ( ) => {

    return (
        <>
        <div className='carousel-bg'>
            <Swiper
            className='carousel-size'
            spaceBetween={400}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            centerInsufficientSlides={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            autoplay={true}
            speed={300}
            EffectFade={EffectFade}
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
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>BANNER VIDEO</h1>
            <TeamCarousel/>
        </>
    )
};

export default Home;