import React from "react";

// Components
import Hero from "../Components/Hero/Hero.tsx";
import Features from "../Components/Features/Features.tsx";
import BestSelling from "../Components/BestSelling/BestSelling.tsx";
import CTA from "../Components/CTA/CTA.tsx";
import LatestProducts from "../Components/LatestProducts/LatestProducts.tsx";
import Newsletter from "../Components/Newsletter/Newsletter.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BestSelling />
      <CTA />
      <LatestProducts />
      <Newsletter />
    </>
  );
};

export default Home;
