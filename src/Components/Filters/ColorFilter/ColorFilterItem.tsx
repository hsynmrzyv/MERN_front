import React from "react";

interface ColorFilterItemProps {
  color: {
    _id: string; // Change from `id` to `_id`
    hex: string;
  };
  onToggle: (id: string) => void;
  isSelected: boolean;
}

const ColorFilterItem: React.FC<ColorFilterItemProps> = ({
  color,
  onToggle,
  isSelected,
}) => {
  return (
    <div
      className={`p-0.5 border ${
        isSelected ? "border-black" : "border-transparent"
      } rounded-full cursor-pointer`}
      onClick={() => onToggle(color._id)}
    >
      <div
        className="block h-6 w-6 rounded-full"
        style={{ backgroundColor: color.hex }}
      ></div>
    </div>
  );
};

export default ColorFilterItem;
