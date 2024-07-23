import React, { useEffect } from "react";
import CategoryFilterItem from "./CategoryFilterItem.tsx";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategories,
  toggleSelectedCategories,
} from "../../../slices/categories.slice.ts";
import { RootState } from "../../../store/store.ts";

const CategoryFilter: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const dispatch = useDispatch();

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      dispatch(setCategories(data));
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, [dispatch]);

  const handleToggleCategory = (id: string) => {
    dispatch(toggleSelectedCategories(id));
  };

  return (
    <div>
      <h3 className="text-[#0E1422] font-medium text-sm mb-4">Categories</h3>
      {categories.map((category) => {
        return (
          <CategoryFilterItem
            key={category._id}
            category={category}
            onToggle={handleToggleCategory}
          />
        );
      })}
    </div>
  );
};

export default CategoryFilter;
