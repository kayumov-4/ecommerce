import React from "react";
import Link from "next/link";
import { Navigation } from "swiper";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { favourite, full_star, like, location, star } from "./utils/icons";
import ItemInfo from "./itemInfo";

function Characteristics({ data }) {
  const [moreOptions, setMoreOptions] = useState(false);
  return (
    <div className="flex">
      <div>
        <img src="/images/kitchen2.svg" alt="" />
        <div className="flex space-x-5 mt-4 w-[904px]">
          <Swiper
            loop={true}
            modules={[Navigation]}
            spaceBetween={15}
            navigation
            slidesPerView={5}
          >
            {data.detail_img.options.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <img src={el} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="ml-12">
        <div className="flex items-center space-x-7">
          <p className="text-[#1D1818] text-3xl">{data.title}</p>
          <div className="flex ">
            {full_star}
            {full_star}
            {full_star}
            {full_star}
            {star}
          </div>
          <p className="text-[#999999] underline text-base">5 отзывов</p>
        </div>
        <div className="flex items-end space-x-5">
          <del className="text-xl text-[#999999] mt-4">{data.old_price}</del>
          <p className="text-4xl">{data.current_price}</p>
        </div>
        <div className="flex items-center space-x-8 mt-7 mb-7">
          <Link href="/">
            <p className="text-[#0E9F2E] text-lg border border-[#0E9F2E] rounded px-3 py-1 ">
              В наличии
            </p>
          </Link>
          <Link href="/">
            <p className="text-[#1D1818] text-lg underline ">Рассрочка 0-0-6</p>
          </Link>
        </div>
        <div>
          <div>
            <div className="flex items-center space-x-10">
              <Link href="/">
                <p className="text-white text-center max-w-sm bg-[#384685] text-2xl border border-[#384685] rounded px-[144px] py-4  ">
                  КУПИТЬ
                </p>
              </Link>
              {like}
            </div>

            <Link href="/">
              <p className="text-[#384685] max-w-sm text-center text-2xl border border-[#384685] rounded px-4 py-4 mt-3 mb-3 ">
                СДЕЛАТЬ ПРОЕКТ И ПРОСЧЕТ
              </p>
            </Link>
            <div className="max-w-sm flex border items-center rounded border-[#384685] mb-6">
              <div className="h-[30px] w-[30px] flex  ml-5">{location}</div>
              <p className=" text-[#384685] py-4 text-center pl-[37px] text-2xl">
                ГДЕ ПОСМОТРЕТЬ
              </p>
            </div>
          </div>
          <p className="text-lg mb-5">Цвета фасадов:</p>
          <div className="flex space-x-2">
            <div className="bg-[#F3F3F3] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#F2EFDE] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#6D3D49] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#877B6D] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#80B098] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#BC8370] h-10 w-10 rounded-sm"></div>
            <div className="bg-[#242A36] h-10 w-10 rounded-sm"></div>
          </div>
          <p className="text-lg mt-8">ХАРАКТЕРИСТИКИ</p>
          <hr className="mb-4 bg-[#384685] h-1 mt-4" />

          {data.characters.map((el) => {
            return (
              <ItemInfo key={el.id} info1={el.title} info2={el.description} />
            );
          })}

          <Link href="" onClick={() => setMoreOptions(!moreOptions)}>
            <p className="py-2 text-lg text-[#384685] bg-[#F3F3F3] rounded mt-3 text-center mb-14">
              Скрыть
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;
