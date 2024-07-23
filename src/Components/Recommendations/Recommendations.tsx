import React from "react";

// Components
import Product from "../Product/Product.tsx";

const Recommendations = () => {
  return (
    <section className="container mx-auto my-40">
      <h2 className="capitalize font-bold mb-2 text-[#0E1422] text-2xl">
        you might also like
      </h2>
      <p className="font-medium uppercase text-[#878A92] text-xs mb-20">
        similar products
      </p>
      <div className="flex justify-between gap-9">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Recommendations;
