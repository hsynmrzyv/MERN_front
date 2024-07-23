import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItemInterface {
  productId: string;
  quantity: number;
  price: number;
  color: any;
  size: any;
  _id: string;
}

interface CartInterface {
  cart: CartItemInterface[];
}

const initialState: CartInterface = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<CartItemInterface[]>) => {
      state.cart = action.payload;
    },
    increaseQuantity: (
      state,
      action: PayloadAction<[string, number | undefined]>
    ) => {
      const product = state.cart.find((item) => item._id === action.payload[0]);

      if (product?.quantity) {
        {
          if (action.payload[1] && product?.quantity < action.payload[1])
            product.quantity++;
        }
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const product = state.cart.find((item) => item._id === action.payload);

      if (product?.quantity === 1) {
        const productIndex = state.cart.findIndex(
          (item) => item._id === action.payload
        );
        state.cart.splice(productIndex, 1);
      }

      if (product?.quantity) {
        product.quantity--;
      }
    },
  },
});

export const { setCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
