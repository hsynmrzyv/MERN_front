import React from "react";

interface SizeFilterItemProps {
  size: { _id: string; name: string };
  isSelected: boolean;
  onClick: () => void;
}

const SizeFilterItem: React.FC<SizeFilterItemProps> = ({
  size,
  isSelected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase flex text-xs items-center justify-center h-10 w-10 border rounded-md ${
        isSelected ? "bg-black text-white" : "text-[#5C5F6A] border-[#E6E7E8]"
      }`}
    >
      {size.name}
    </button>
  );
};

export default SizeFilterItem;
