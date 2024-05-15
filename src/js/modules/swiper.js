import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

function swiperBest() {
        const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 2,
        loop: true,
        spaceBetween: 16,

        breakpoints: {
            768: {
            slidesPerView: 3,
            spaceBetween: 24,
            },
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
};

export default swiperBest;

