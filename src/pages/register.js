import React from "react";

function RegistrationPage() {
  return (
    <div className="px-6 max-w-screen-2xl mx-auto mt-20">
      <div className="border-[#384685] border w-[700px] h-[700px] rounded-lg mx-auto">
        <div className="text-center">
          <p className="text-3xl text-[#1D1818] pt-7 text-center font-bold">
            РЕГИСТРАЦИЯ
          </p>
          <div>
            <form className="mx-12 mt-6 font-light">
              <p className="text-[#1D1818] text-lg mb-4 text-start">
                Телефон или e-mail*
              </p>
              <input
                className="text-lg h-[57px] pl-5 bg-[#F9F9F9] w-full"
                type="number"
                placeholder="+7 (000) 000 00 00"
              />
              <p className="text-[#1D1818] text-lg mb-4 mt-4 text-start">
                Пароль*
              </p>
              <input
                className="bg-[#F9F9F9] h-[57px] pl-5 w-full"
                type="text"
                placeholder="**********"
              />
              <p className="text-[#1D1818] text-lg mb-4 mt-4 text-start">
                Повторите пароль*
              </p>
              <input
                className="bg-[#F9F9F9] h-[57px] pl-5 w-full"
                type="text"
                placeholder="**********"
              />
              <p className="text-[#564D4D] mt-6 mb-10">
                * - поля, обязательные для заполнения
              </p>
            </form>
            <div className="flex items-center justify-center space-x-5 mb-8">
              <p className="text-lg">Зарегистрироваться через</p>
              <img src="/images/google.svg" alt="" />
              <img src="/images/facebook.svg" alt="" />
            </div>
            <button className="text-xl  bg-[#384685] py-[18px] px-[197px] text-[#FFFFFF] rounded">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
            {/* <a
              className="text-xl bg-[#384685] py-[18px] px-[197px] text-[#FFFFFF] rounded"
              href="#"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </a> */}
            <p className="text-base mt-5">Уже есть аккаунт?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
