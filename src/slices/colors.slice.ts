import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColorInterface {
  _id: string; // Change from `id` to `_id`
  name: string;
  hex: string; // Color hex code
}

interface ColorsState {
  colors: ColorInterface[];
  selectedColors: ColorInterface[];
}

const initialState: ColorsState = {
  colors: [],
  selectedColors: [],
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setColors: (state, action: PayloadAction<ColorInterface[]>) => {
      state.colors = action.payload;
    },
    toggleSelectedColors: (state, action: PayloadAction<string>) => {
      const colorId = action.payload;
      const color = state.colors.find((c) => c._id === colorId); // Use `_id` instead of `id`

      if (color) {
        const isSelected = state.selectedColors.some((c) => c._id === colorId); // Use `_id` instead of `id`
        if (isSelected) {
          // Remove color from selectedColors
          state.selectedColors = state.selectedColors.filter(
            (c) => c._id !== colorId // Use `_id` instead of `id`
          );
        } else {
          // Add color to selectedColors
          state.selectedColors.push(color);
        }
      }
    },
  },
});

export const { setColors, toggleSelectedColors } = colorsSlice.actions;

export default colorsSlice.reducer;
