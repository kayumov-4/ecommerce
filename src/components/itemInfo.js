import React from "react";

function ItemInfo({ info1, info2 }) {
  return (
    <>
      <div className="flex mt-3 space-x-5">
        <p className="text-lg ">{info1}</p>
        <p className="text-lg mb-4">{info2}</p>
      </div>
      <hr className="bg-[#E2E2E2] h-[1px]" />
    </>
  );
}

export default ItemInfo;
