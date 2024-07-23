import { configureStore } from "@reduxjs/toolkit";

// SLices
import userSlice from "../slices/user.slice.ts";
import cartSlice from "../slices/cart.slice.ts";
import categoriesSlice from "../slices/categories.slice.ts";
import colorsSlice from "../slices/colors.slice.ts";
import sizesSlice from "../slices/size.slice.ts";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    categories: categoriesSlice,
    colors: colorsSlice,
    sizes: sizesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
