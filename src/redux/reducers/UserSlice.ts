import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetUserPayload } from "src/redux/reducers/@types";
import {RootState} from "src/redux/store";

type initialType = {
  name: string | null;
  email: string | null;
  token: string;
  id: string;
};
const initialState: initialType = {
  name: "",
  email: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state, action) => {
      state.name = "";
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

export const UserSelectors = {
  getUserInfo: (state: RootState) => state.user,
};