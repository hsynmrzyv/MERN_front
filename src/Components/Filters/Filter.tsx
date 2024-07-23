import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter/CategoryFilter.tsx";
import ColorFilter from "./ColorFilter/ColorFilter.tsx";
import SizeFilter from "./SizeFilter/SizeFilter.tsx";

const Filter: React.FC = () => {
  return (
    <div className="col-span-1 border border-gray-200 rounded-md py-6 px-4 flex flex-col gap-10 self-start">
      <CategoryFilter />
      <ColorFilter />
      <SizeFilter />
      <button className="bg-black text-white py-2 px-3 rounded-md w-full">
        Apply filters
      </button>
    </div>
  );
};

export default Filter;
