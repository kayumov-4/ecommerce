import React from "react";
import Link from "next/link";
function Category({ desc, img }) {
  return (
    <div className="">
      <Link href="/">
        <a className="relative">
          <p className="absolute text-[22px] text-white bg-[#384685] py-1 px-5 bottom-0 left-0 rounded-bl-xl rounded-tr-xl">
            {desc}
          </p>
          <img className="w-full" src={img} alt="" />
        </a>
      </Link>
    </div>
  );
}

export default Category;
