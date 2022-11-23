import React from "react";

function Login() {
  return (
    <div className="px-6 max-w-screen-2xl mx-auto mt-20">
      <div className="border-[#384685] border w-[700px] h-[600px] rounded-lg mx-auto">
        <div className="text-center">
          <p className="text-3xl text-[#1D1818] pt-7 text-center font-bold">
            ВХОД
          </p>
          <div>
            <form className="mx-12 mt-6 font-light">
              <p className="text-[#1D1818] text-lg mb-4 text-start">
                Телефон или e-mail*
              </p>
              
              <input
                className="text-lg h-[57px] pl-5 bg-[#F9F9F9] w-full border border-[#EE3C3F] rounded"
                type="number"
                placeholder="+7 (000) 000 00 00"
              />
              <p className="text-sm text-[#EE3C3F] text-start mt-1">
                Это поле обязательно для заполнения
              </p>
              <p className="text-[#1D1818] text-lg mb-4 mt-4 text-start">
                Пароль*
              </p>
              <input
                className="bg-[#F9F9F9] h-[57px] pl-5 w-full"
                type="password"
                placeholder="**********"
              />

              <p className="text-[#564D4D] mt-6 mb-10 text-left">
                Забыли пароль?
              </p>
            </form>
            <div className="flex items-center justify-center space-x-5 mb-6">
              <p className="text-lg">Авторизоваться через</p>
              <img src="/images/google.svg" alt="" />
              <img src="/images/facebook.svg" alt="" />
            </div>
            <button className="text-xl  bg-[#384685] py-[18px] px-[197px] text-[#FFFFFF] rounded">
              ВОЙТИ
            </button>
            <p className="text-base mt-5">Зарегистрироваться</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
