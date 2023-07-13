import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Brand = () => {

    const data = [
        {
            img: "zhontaisolar-logo.png",
        },
        {
            img: "parwaz-logo.png",
        },
        {
            img: "Kvant_logo.svg",
        },
        {
            img: "emu_logo.png",
        },
        {
            img: "greenbox_logo.png",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide text-center"  key={i}>
                        <a href="#"><img src={`assets/imgs/page/about/${item.img}`} alt="Genz" /></a>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Brand;

