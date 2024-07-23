import { useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";
import React from "react";

interface CategoryFilterItemProps {
  category: {
    _id: string;
    name: string;
  };
  onToggle: (id: string) => void;
}

const CategoryFilterItem: React.FC<CategoryFilterItemProps> = ({
  category,
  onToggle,
}) => {
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories
  );
  const isSelected = selectedCategories.find((c) => c._id === category._id);

  return (
    <button
      className={`text-[#474B57] text-start inline-block w-full text-sm mb-3 py-3 border-b ${
        isSelected && "font-bold"
      }`}
      onClick={() => onToggle(category._id)}
    >
      {category.name}
    </button>
  );
};

export default CategoryFilterItem;
