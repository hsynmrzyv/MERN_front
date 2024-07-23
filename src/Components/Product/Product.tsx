import React from "react";

// Link
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <Link to={`/products/${Math.random()}`}>
      <div className="bg-[#F6F6F6] rounded">
        <img
          src={`http://localhost:5555/${props.productPic}`}
          className="w-full object-cover"
          alt=""
        />
      </div>
      <h2 className="mt-6 mb-3 text-[#0E1422] font-medium text-sm">
        {props.title ? props.title : "Classic Monochrome Tees"}
      </h2>
      <div className="flex gap-4 items-center">
        <span className="border border-[#E6E7E8] px-4 py-[2px] leading-[24px] uppercase rounded-full">
          in stock
        </span>
        <span className="text-[#474B57] leading-[1.75] text-sm">
          ${props.price && props.price}
        </span>
      </div>
    </Link>
  );
};

export default Product;
