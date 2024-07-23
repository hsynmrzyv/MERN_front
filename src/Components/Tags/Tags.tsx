import React from "react";
import Tag from "./Tag.tsx";
import { useDispatch } from "react-redux";
import { toggleSelectedCategories } from "../../slices/categories.slice.ts";
import { toggleSelectedSizes } from "../../slices/size.slice.ts";

interface TagsProps {
  selectedCategories: { _id: string; name: string }[];
  selectedSizes: { _id: string; name: string }[];
}

const Tags: React.FC<TagsProps> = ({ selectedCategories, selectedSizes }) => {
  const dispatch = useDispatch();

  const handleRemoveCategory = (id: string) => {
    dispatch(toggleSelectedCategories(id));
  };

  const handleRemoveSize = (id: string) => {
    dispatch(toggleSelectedSizes(id));
  };

  return (
    <div className="mt-2">
      <h3 className="mb-3">Applied Filters:</h3>
      <div className="flex gap-3 items-center">
        {selectedCategories.map((category) => (
          <Tag
            key={category._id}
            label={category.name}
            onClose={() => handleRemoveCategory(category._id)}
          />
        ))}
        {selectedSizes.map((size) => (
          <Tag
            key={size._id}
            label={size.name}
            onClose={() => handleRemoveSize(size._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tags;
