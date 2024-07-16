import React from "react";

// Icons
import ArrowRight from "../../Icons/ArrowRight.tsx";

const Hero = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="container mx-auto h-[440px] relative flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-[#202533] font-semibold text-[32px] mb-3">
            Fresh Arrivals Online
          </h1>
          <p className="text-sm text-[#474B57] mb-12">
            Discover Our Newest Collection Today.
          </p>
          <button className="text-white py-[10px] leading-[1.75] px-6 bg-[#0E1422] rounded flex items-center gap-[6px]">
            <span>View Collection</span>
            <ArrowRight />
          </button>
        </div>
        {/* Right */}
        <div>
          <div className="w-[255px] absolute bottom-0 right-0">
            <img src={require("../../Images/Hero Image.png")} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
