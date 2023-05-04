import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SetUserPayload,
} from "src/redux/reducers/@types";
import {RootState} from "src/redux/store";

type initialType = {
  email: string | null;
  token: string | null;
  id: string | null;
};
const initialState: initialType = {
  email: "",
  token: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SetUserPayload>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state, action) => {
      state.email = "";
      state.token = "";
      state.id = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

