import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryInterface {
  slug: string;
  name: string;
  _id: string;
}

interface CategoriesState {
  categories: CategoryInterface[];
  selectedCategories: CategoryInterface[];
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryInterface[]>) => {
      state.categories = action.payload;
    },
    toggleSelectedCategories: (state, action: PayloadAction<string>) => {
      const categoryId = action.payload;
      const category = state.categories.find((c) => c._id === categoryId);

      if (category) {
        const isSelected = state.selectedCategories.some(
          (c) => c._id === categoryId
        );
        if (isSelected) {
          state.selectedCategories = state.selectedCategories.filter(
            (c) => c._id !== categoryId
          );
        } else {
          state.selectedCategories.push(category);
        }
      }
    },
  },
});

export const { setCategories, toggleSelectedCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
