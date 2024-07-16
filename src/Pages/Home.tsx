import React from "react";

// Components
import Hero from "../Components/Hero/Hero.tsx";
import Features from "../Components/Features/Features.tsx";
import BestSelling from "../Components/BestSelling/BestSelling.tsx";
import CTA from "../Components/CTA/CTA.tsx";
import LatestProducts from "../Components/LatestProducts/LatestProducts.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BestSelling />
      <CTA />
      <LatestProducts />
    </>
  );
};

export default Home;
