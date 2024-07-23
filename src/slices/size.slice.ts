import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SizeInterface {
  _id: string; // Unique identifier
  name: string; // Name of the size (e.g., S, M, L)
}

interface SizesState {
  sizes: SizeInterface[];
  selectedSizes: SizeInterface[];
}

const initialState: SizesState = {
  sizes: [],
  selectedSizes: [],
};

const sizesSlice = createSlice({
  name: "sizes",
  initialState,
  reducers: {
    setSizes: (state, action: PayloadAction<SizeInterface[]>) => {
      state.sizes = action.payload;
    },
    toggleSelectedSizes: (state, action: PayloadAction<string>) => {
      const sizeId = action.payload;
      const size = state.sizes.find((s) => s._id === sizeId);

      if (size) {
        const isSelected = state.selectedSizes.some((s) => s._id === sizeId);
        if (isSelected) {
          state.selectedSizes = state.selectedSizes.filter(
            (s) => s._id !== sizeId
          );
        } else {
          state.selectedSizes.push(size);
        }
      }
    },
  },
});

export const { setSizes, toggleSelectedSizes } = sizesSlice.actions;

export default sizesSlice.reducer;
