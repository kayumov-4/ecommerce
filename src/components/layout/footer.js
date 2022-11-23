function Footer() {
  return (
    <footer className="bg-[#384685]">
      <div className=" pt-10 mx-auto max-w-screen-2xl flex items-start justify-between">
        <div className="">
          <img src="/images/logo2.svg" alt="" />
          <p className="text-xl text-white mt-5 mb-4">8-961-525-91-91</p>
          <p className="text-white text-lg mb-4">
            Почта:
            <a className="text-xl font-semibold" href="">
              mebelarko@mail.ru
            </a>
          </p>
          <p className="text-white text-2xl">Мы в социальных сетях</p>
          <div className="flex mt-5 mb-5 space-x-5">
            <img
              className="w-[60px] h-[60px]"
              src="/images/instagram.png"
              alt=""
            />
            <img
              className="w-[60px] h-[60px]"
              src="/images/twitter-logo.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-2xl mb-7 text-white">Кухни</p>
          <p className="text-lg text-white">Угловые кухни</p>
          <p className="text-lg mt-5 text-white">Столы кухонные</p>
          <p className="text-lg mt-5 text-white">Стулья для кухни</p>
          <p className="text-lg mt-5 text-white">Комплектующие</p>
        </div>
        <div>
          <p className="text-2xl mb-7 text-white">Гостинные</p>
          <p className="text-lg text-white">Модульные</p>
          <p className="text-lg mt-5 text-white">Журнальные столы</p>
          <p className="text-lg mt-5 text-white">Полки</p>
          <p className="text-lg mt-5 text-white">Тумбы под ТВ</p>
        </div>
        <div>
          <p className="text-2xl mb-7 text-white">Спальни</p>
          <p className="text-lg text-white">Кровати</p>
          <p className="text-lg mt-5 text-white">Матрацы</p>
          <p className="text-lg mt-5 text-white">Шкафы</p>
          <p className="text-lg mt-5 text-white">Комоды</p>
        </div>
        <div>
          <p className="text-2xl mb-7 text-white">Диваны</p>
          <p className="text-lg text-white">Прямые</p>
          <p className="text-lg mt-5 text-white">Угловые</p>
          <p className="text-lg mt-5 text-white">Тумбы</p>
          <p className="text-lg mt-5 text-white">Кресла</p>
        </div>
        <div>
          <p className="text-2xl mb-7 text-white">Детские</p>
          <p className="text-lg text-white">Кровати</p>
          <p className="text-lg mt-5 text-white">Полки</p>
          <p className="text-lg mt-5 text-white">Столы</p>
          <p className="text-lg mt-5 text-white">Тумбы</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
