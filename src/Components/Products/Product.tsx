import React from "react";

const Product = () => {
  return (
    <div>
      <div className="bg-[#F6F6F6] rounded">
        <img src={require("../../Images/T-shirt.png")} alt="" />
      </div>
      <h2 className="mt-6 mb-3 text-[#0E1422] font-medium text-sm">
        Classic Monochrome Tees
      </h2>
      <div className="flex gap-4 items-center">
        <span className="border border-[#E6E7E8] px-4 py-[2px] leading-[24px] uppercase rounded-full">
          in stock
        </span>
        <span className="text-[#474B57] leading-[1.75] text-sm">$35.00</span>
      </div>
    </div>
  );
};

export default Product;
