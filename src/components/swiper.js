import React from "react";

import { Autoplay } from "swiper";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
const Slider = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-2">
        <div className="h-[450px] bg-[#C4C4C4] mt-10"></div>

        <Swiper
          className="max-w-full"
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="h-[450px] mt-10  mb-5">
              <img
                className="w-full  h-full object-cover"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/b697aa98978713.5ee8a4cbe3232.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[450px] bg-[#C4C4C4] mt-10">
              <img
                className="w-full h-full object-cover"
                src="https://stroyson.ru/sites/default/files/223816792987_salon-marron.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[450px] bg-[#C4C4C4] mt-10">
              <img
                className="w-full  h-full object-cover"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d357ee27604799.56367c4883f4d.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[450px] bg-[#C4C4C4] mt-10">
              <img
                className="w-full h-full object-cover"
                src="https://mobimg.b-cdn.net/v3/fetch/b1/b1b5c5a07821848c97c6c6f4075b6f4e.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
