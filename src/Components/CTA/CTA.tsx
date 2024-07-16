import React from "react";

// Icons
import ArrowRight from "../../Icons/ArrowRight.tsx";

const CTA: React.FC = () => {
  return (
    <section className="bg-[#F6F6F6]  ">
      <div className="container mx-auto flex pt-14 pb-24 justify-between items-center relative ">
        {/* Left */}
        <div>
          <h2 className="text-[#0E1422] font-bold text-2xl">
            Browse Our Fashion Paradise!
          </h2>
          <p className="mt-6 mb-8 text-[#5C5F6A] text-sm">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <button className="px-6 py-[10px] leading-[1.75] text-white bg-[#0E1422] flex items-center justify-center rounded gap-[6px]">
            <span>Start Browsing</span>
            <ArrowRight />
          </button>
        </div>
        {/* Right */}
        <div className="absolute top-0 right-0">
          <img
            className="w-[225px]"
            src={require("../../Images/CTA Image.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
