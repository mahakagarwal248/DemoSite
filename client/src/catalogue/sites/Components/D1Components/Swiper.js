import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function CompSwiper() {
    return (
        <div style={{color:'white'}}>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <FormatQuoteIcon style={{fontSize:'50px'}} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5 style={{color:'tomato'}}>Ralph Edwards</h5>
                    <span style={{fontSize:'12px'}}>12 April,2021</span>
                </SwiperSlide>
                <SwiperSlide>
                    <FormatQuoteIcon style={{fontSize:'50px'}} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5 style={{color:'tomato'}}>Ralph Edwards</h5>
                    <span style={{fontSize:'12px'}}>12 April,2021</span>
                </SwiperSlide>
                <SwiperSlide>
                    <FormatQuoteIcon style={{fontSize:'50px'}} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5 style={{color:'tomato'}}>Ralph Edwards</h5>
                    <span style={{fontSize:'12px'}}>12 April,2021</span>
                </SwiperSlide>
                <SwiperSlide>
                    <FormatQuoteIcon style={{fontSize:'50px'}} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <h5 style={{color:'tomato'}}>Ralph Edwards</h5>
                    <span style={{fontSize:'12px'}}>12 April,2021</span>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CompSwiper
