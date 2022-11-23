import Link from "next/link";
import ActiveLink from "../utils/activeLink";
import { cart, favourite, location, search, user } from "../utils/icons";

function Header() {
  return (
    <header>
      {/* min width-350px */}
      {/* <div className="max-w-sm  posts-center justify-between pt-5 px-4">
        <div className="flex posts-center mx-auto justify-between space-x-2 mb-5">
          <div className="h-[22px] w-[22px] flex">{location}</div>
          <b className="mr-1 ml-2">Ростов</b>
          <p>ул. Московская, 144 корп. - 1</p>
          <img src="./images/more.svg" alt="" />
        </div>
        <div className="flex posts-center justify-between space-x-2 border-t pt-5">
          <div className="w-[20px] h-[20px] fill-[#384685]">{menu}</div>
          <b>ЛОГО</b>
          <div className="w-[20px] h-[20px] fill-[#384685]">{map}</div>
          <p>Где посмотреть</p>
          <div className="w-[23px] h-[23px] fill-[#384685] cursor-pointer">
            {search}
          </div>
          <div className="w-[20px] h-[20px] fill-[#384685]">{phone}</div>
          <div className="w-[20px] h-[20px] fill-[#384685]">{cart}</div>
        </div>
      </div> */}
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between pt-5">
        <div className="flex items-center">
          <div className="h-[22px] w-[17px] flex">{location}</div>
          <b className="mr-1 ml-2">Ростов</b>
          <img src="/images/more.svg" alt="" />
          <ul className="flex">
            <li className="ml-10 mr-10">Акции</li>
            <li className="mr-10">Сборка</li>
            <li className="mr-10">Оплата</li>
            <li className="mr-10">Доставка</li>
          </ul>
        </div>
        <div className="flex">
          <p className="mr-12">Наши работы</p>
          <p>Контакты</p>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between pt-5">
        <img src="/images/logo.svg" alt="" />
        <div>
          <p>ул. Московская, 144 корп. - 1</p>
          <a className="text-[#E13B3F] underline" href="#">
            Схема проезда
          </a>
        </div>
        <form className="relative">
          <div className="absolute inset-y-0 right-4 flex items-center">
            <div className="w-[23px] h-[23px] fill-[#A8D1E7] cursor-pointer">
              {search}
            </div>
          </div>
          <input
            className="flex rounded-[25px] w-[295px] h-[45px] border-[1px] border-[#A8D1E7] items-center pl-3 pr-12"
            type="text"
            placeholder="Поиск"
          />
        </form>
        <div>
          <Link href="tel:89615259191">
            <a className="flex mb-1 items-center">
              <img src="/images/phone.svg" alt="" />
              <b className="ml-2 text-xl">8 (961) 525 91 91</b>
            </a>
          </Link>
          <a
            className="text-[#E13B3F] rounded-md px-8 py-[6px] border-[#E13B3F] border flex text-center items-center"
            href="#"
          >
            Заказать звонок
          </a>
        </div>
        <div className="flex space-x-2 ">
          <div className="space-y-2 flex flex-col items-center justify-between">
            <div className="w-[19px] h-[19px]"> {user}</div>
            <p className="text-lg">Войти</p>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-between">
            <div className="flex justify-around space-x-2">
              <div className="w-[22px] h-[19px]">{favourite}</div>
              <span className="bg-red-500 rounded-[7px] py-[2.5px] px-[14px] text-xs text-white">
                2
              </span>
            </div>
            <p className="text-lg">Избранное</p>
          </div>
          <div className="space-y-2 flex flex-col items-center justify-between">
            <div className="w-[24px] h-[24px]">{cart}</div>
            <p className="text-lg">Корзина</p>
          </div>
        </div>
      </div>
      <div className="bg-[#A8D1E7] mt-3">
        <nav className="flex items-center max-w-screen-2xl mx-auto justify-between space-x-1">
          <ActiveLink href={"/6"} content={"КУХНИ"} />
          <ActiveLink href={"/about"} content={"ГОСТИННЫЕ"} />
          <ActiveLink href={"/2"} content={"СПАЛЬНИ"} />
          <ActiveLink href={"/3"} content={"ПРИХОЖИЕ"} />
          <ActiveLink href={"/4"} content={"ШКАФЫ-КУПЕ"} />
          <ActiveLink href={"/5"} content={"ДЕТСКИЕ"} />
          <ActiveLink href={"/"} content={"ГДЕ ПОСМОТРЕТЬ"} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
