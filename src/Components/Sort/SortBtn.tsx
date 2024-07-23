import React from "react";

interface SortBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SortBtn: React.FC<SortBtnProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-center bg-white p-2 text-[#5C5F6A] text-sm cursor-pointer min-w-[150px]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SortBtn;
