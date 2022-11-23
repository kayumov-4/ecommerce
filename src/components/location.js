import Link from "next/link";
import React from "react";

function Location() {
  return (
    <div className="mt-10 flex items-center mb-10">
      <div className="relative">
        <p className="absolute text-2xl text-black mt-14 ml-10 z-50">
          НАШИ КОНТАКТЫ
        </p>
        <p className="absolute text-black text-lg mt-32 ml-10 z-50">
          Почта:
          <a className="text-xl font-semibold" href="">
            mebelarko@mail.ru
          </a>
        </p>
        <p className="absolute text-xl text-black mt-48 ml-10 z-50">
          8-961-525-91-91
        </p>
        <Link href="/">
          <p className="py-3 px-9 absolute text-xl text-white bg-[#384685] rounded-md mt-64 ml-10 z-50">
            ЗАДАТЬ ВОПРОС
          </p>
        </Link>
        <img
          className="h-[450px] w-full opacity-50"
          src="/images/bluemaster.svg"
          alt=""
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1852.209873111423!2d69.3512056822546!3d41.350424420491684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef46e33f621a9%3A0x19171b79be7c9122!2sAIRGUNS.UZ!5e0!3m2!1sru!2s!4v1664174793742!5m2!1sru!2s"
        className="w-[835px] h-[450px] rounded-tr-[10px] rounded-br-[10px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
