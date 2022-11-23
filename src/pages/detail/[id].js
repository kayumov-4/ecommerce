import { useRouter } from "next/router";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../components/card";
import Characteristics from "../../components/characteristics";
import Layout from "../../components/Layout";
import Location from "../../components/Location";
import { right_arrow } from "../../components/utils/icons";
import ModelsActiveLink from "../../components/utils/modelsActiveLink";

function Detail({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log(data);

  if (!data) {
    return "Not Found";
  }

  return (
    <Layout title={"about"}>
      <div className="px-6 max-w-screen-2xl mx-auto">
        <div className="flex items-center space-x-2 mb-4 mt-4">
          <p className="text-[#384D54] text-base">Главная</p>
          {right_arrow}
          <p className="text-[#384D54] text-base">Каталог</p>
          {right_arrow}
          <p className="text-[#384D54] text-base">Кухни</p>
          {right_arrow}
          <p className="text-[#9C9E9F] text-base">Модульная кухня Ройс</p>
        </div>
        <Characteristics data={data} />
        <nav className="flex items-center max-w-screen-2xl space-x-5">
          <ModelsActiveLink href={"/"} content={"ДОСТУПНЫЕ МОДУЛИ"} />
          <ModelsActiveLink href={"/"} content={"ВАРИАНТЫ СТОЛЕШНИЦ"} />
          <ModelsActiveLink href={"/"} content={"ОТЗЫВЫ"} />
          <ModelsActiveLink href={"/"} content={"ОПИСАНИЕ"} />
          <ModelsActiveLink href={"/"} content={"ДОСТАВКА И ОПЛАТА"} />
        </nav>
        <p className="text-3xl mt-10 mb-8">ВОЗМОЖНО ВАС ЗАИНТЕРЕСУЕТ</p>
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
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
        </Swiper>
        <Location />
      </div>
    </Layout>
  );
}

export default Detail;

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/products/${context.params.id}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
