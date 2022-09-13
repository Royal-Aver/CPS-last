import '../scss/style.scss';

import Swiper, { Pagination } from 'swiper';
import {CallingMainMenu} from './main-menu';
import {feedbackOpen} from './feedback';
import {callbackOpen} from './callback';
import {serviceOpenText} from './service';
import {repairOpenFullBlock} from './repair';
import {repairVievOpenFullBlock} from './repair-viev';

let init = false;

let swiperMode = () => {

   let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

    if(mobile.matches) {
         if (!init) {
             init = true;
             const swiper = new Swiper('.swiper', {
              modules: [Pagination],
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                    type: 'bullets',
                  },
             });
         }
     }
     else if (!mobile.matches && init)  {
         swiper.destroy(true,true);
       init = false;
     }
  }

window.onload = function() {
    swiperMode();
}

window.onresize = function() {
    swiperMode();
}

