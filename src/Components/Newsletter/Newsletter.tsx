import React from "react";

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="container mx-auto my-40 flex items-center justify-between py-16">
        <div>
          <h3 className="text-2xl font-bold text-black mb-6">
            Join Our Newsletter
          </h3>
          <p className="text-[#5C5F6A] text-sm">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <form className="gap-4 flex">
          <input
            type="text"
            className="py-[10px] px-4 border border-gray-400 rounded-md bg-transparent text-sm text-[#333845] focus:outline-none"
            placeholder="Your email address"
          />
          <button
            className="text-white text-sm rounded-[4px] bg-[#0E1422] py-[10px] px-6"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
