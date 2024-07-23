import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInterface {
  fullName: string;
  email: string;
  password: string;
  _id: string;
  isAdmin: boolean;
}

const initialState = {
  fullName: "",
  email: "",
  password: "",
  _id: "",
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInterface>) => {
      state._id = action.payload._id;
      state.fullName = action.payload.fullName;
      state.password = action.payload.password;
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
    },
    removeUser: (state, action: PayloadAction<null>) => {
      state._id = "";
      state.fullName = "";
      state.password = "";
      state.email = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
