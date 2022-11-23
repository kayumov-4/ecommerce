import React from "react";
import { delivery, discount, location, sticker } from "./utils/icons";
import Category from "./category";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./card";

function Main({ products }) {
  return (
    <div className="mx-auto max-w-screen-2xl mb-10">
      <h1 className="text-3xl mb-10 mt-5">НАШИ ПРЕИМУЩЕСТВА</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center p-5 space-x-4 bg-[#F4F4F4] rounded-md">
          <div className="h-[44px] w-[44px]">{location}</div>
          <p className="text-lg">Удобное расположение магазина</p>
        </div>
        <div className="flex items-center p-5 space-x-4 bg-[#F4F4F4] rounded-md">
          <div className="h-[44px] w-[44px]">{delivery}</div>
          <p className="text-lg">Быстрая доставка</p>
        </div>
        <div className="flex items-center p-5 space-x-4 bg-[#F4F4F4] rounded-md">
          <div className="h-[44px] w-[44px]">{discount}</div>
          <p className="text-lg">Если найдете дешевле - сделаем скидку</p>
        </div>
        <div className="flex items-center p-5 space-x-4 bg-[#F4F4F4] rounded-md">
          <div className="h-[44px] w-[44px]">{sticker}</div>
          <p className="text-lg">Гарантия качества</p>
        </div>
      </div>
      <h1 className="text-3xl mt-10 mb-10">КАТАЛОГ</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Category desc="КУХНИ" img="/images/kitchen.png" />
        <Category desc="ГОСТИННЫЕ" img="/images/livingroom2.svg" />
        <Category desc="СПАЛЬНИ" img="/images/bedroom.png" />
        <Category desc="ПРИХОЖИЕ" img="/images/hall.svg" />
        <Category desc="ШКАФЫ-КУПЕ" img="/images/wardrobe.svg" />
        <Category desc="ДЕТСКИЕ" img="/images/childrenroom.svg" />
        <Category desc="ДИВАНЫ" img="/images/sofa.svg" />
        <Category desc="СТОЛЫ И СТУЛЬЯ" img="/images/hall2.svg" />
        {products?.map((product) => (
          <Card data={product} key={product.id} />
        ))}
      </div>
      <div className="bg-[#F2F2F2] mt-10 rounded-md">
        <p className="text-lg py-6 text-center">Показать еще</p>
      </div>
      <p className="text-3xl mt-10 mb-8">ТОВАРЫ ПО АКЦИИ</p>
      <Swiper
        className="max-w-full"
        spaceBetween={35}
        modules={[Autoplay]}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {products?.map((product) => (
          <SwiperSlide key={product.id}>
            <Card data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Main;
