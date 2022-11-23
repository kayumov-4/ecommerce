function Works() {
  return (
    <div className="flex flex-col min-h-screen">
      <p className="text-3xl mb-10">НАШИ РАБОТЫ</p>
      <div className="grid grid-cols-3 gap-6">
        <div className="relative">
          <p className="absolute text-[22px] text-white bg-[#384685] py-1 px-5 left-0 bottom-0 rounded-bl-xl rounded-tr-xl">
            КУХНЯ ГЛЕТЧЕР
          </p>
          <img
            className="w-full h-full rounded-lg"
            src="/images/gletcher2.svg"
            alt=""
          />
        </div>
        <div className="relative">
          <p className="absolute text-[22px] text-white bg-[#384685] py-1 px-5 left-0 bottom-0 rounded-bl-xl rounded-tr-xl">
            ГОСТИННАЯ ДЕНВЕР
          </p>
          <img
            className="w-full h-full rounded-lg"
            src="/images/bedroom.png"
            alt=""
          />
        </div>
        <div className="row-span-2 relative">
          <p className="absolute text-[22px] text-white bg-[#384685] py-1 px-5 left-0 bottom-0 rounded-bl-xl rounded-tr-xl">
            КУХНЯ ЛОНДОН
          </p>
          <img
            className="w-full h-full rounded-lg"
            src="/images/london2.svg"
            alt=""
          />
        </div>
        <div className="col-span-2 relative">
          <p className="absolute text-[22px] text-white bg-[#384685] py-1 px-5 left-0 bottom-0 rounded-bl-xl rounded-tr-xl">
            КУХНЯ АМЕЛИ
          </p>
          <img
            className="w-full h-full  rounded-lg"
            src="/images/ameli2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Works;
