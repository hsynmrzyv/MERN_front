import React from "react";

// Components
import Product from "../Products/Product.tsx";

const BestSelling: React.FC = () => {
  return (
    <section className="container mx-auto my-40">
      <p className="text-center font-medium uppercase  text-[#878A92] text-xs mb-2">
        shop now
      </p>
      <h2 className="text-center capitalize font-bold mb-20 text-[#0E1422] text-2xl">
        Best selling
      </h2>
      <div className="flex justify-between gap-9">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default BestSelling;
