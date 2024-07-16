import React from "react";

// Components
import Feature from "./Feature.tsx";

const fakeFeaturesData = [
  {
    id: 1,
    icon: "Truck",
    title: "Free Shipping",
    description:
      "Upgrade your style today and get FREE shipping on all orders! Don't miss out.",
  },
  {
    id: 2,
    icon: "Ribbon",
    title: "Satisfaction Guarantee",
    description:
      "Shop confidently with our Satisfaction Guarantee: Love it or get a refund.",
  },
  {
    id: 3,
    icon: "Shield",
    title: "Secure Payment",
    description:
      "Your security is our priority. Your payments are secure with us.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="container mx-auto mt-20 mb-28 flex gap-28">
      {fakeFeaturesData.map((feature) => (
        <Feature
          key={feature.id}
          title={feature.title}
          icon={feature.icon}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default Features;
