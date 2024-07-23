import React from "react";

// Components
import Product from "../Product/Product.tsx";

const LatestProducts: React.FC = () => {
  return (
    <section className="container mx-auto my-40">
      <div className="flex gap-6 items-center justify-center mb-16">
        <span className="text-sm font-medium rounded-full px-4 py-1 text-black capitalize border border-[#E9E9EB]">
          feautred
        </span>
        <span className="text-sm font-medium text-[#5C5F6A] capitalize">
          latest
        </span>
      </div>
      <div className="flex justify-between gap-9">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default LatestProducts;
