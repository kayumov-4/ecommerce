import Link from "next/link";
import React, { useState } from "react";
import { like, liked } from "./utils/icons";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
function Card({ data }) {
  const [favourite, setFavourite] = useState(false);
  console.log(data);
  return (
    <Link href={`/detail/${data?.id}`}>
      <a className="bg-white border shadow-md mx-auto">
        <div className="px-[37px] pt-[37px]">
          <div className="w-[285px] h-[220px] object-contain">
            <Swiper className="max-w-full" slidesPerView={1} loop={true}>
              <SwiperSlide>
                <div className="">
                  <img className="mb-10" src={data.img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img className="mb-10" src={data.img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img className="mb-10" src={data.img} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img className="mb-10" src={data.img} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <p className="mt-8 text-2xl">{data.title}</p>
          <div className="bg-[#E2E2E2] h-[1px] mt-8 mb-5"></div>
          <div className="flex items-center space-x-5">
            <del className="text-[#BDBDBD] text-lg">{data.old_price}</del>
            <p className="text-2xl">{data.current_price}</p>
          </div>
          <div className="bg-[#E2E2E2] h-[1px] mt-5 mb-5"></div>
          <div className="flex items-center justify-between pb-5">
            <Link href="/">
              <p className="text-xl text-[#1D1818] rounded-md border px-[74px] py-[15px] border-[#384685]">
                КУПИТЬ
              </p>
            </Link>
            <div onClick={() => setFavourite(!favourite)} className="">
              {favourite ? liked : like}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Card;
