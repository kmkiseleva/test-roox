import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/types";
import axios from "axios";

type InitialState = {
  items: TUser[];
  loading: boolean,
  error: null | string
}

const initialState: InitialState = {
  items: [],
  loading: false,
  error: null
};

export const fetchUsers = () => async (dispatch: any, getState: any) => {
  dispatch(fetchStart(initialState));
  try {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const users = res.data;
      dispatch(put(users));
      dispatch(fetchSuccess(users));
    })
  } catch (e) {
    dispatch(fetchError(e));
  }
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    put(state, action) {
      state.items = action.payload;
    },
    fetchStart(state, action) {
      return { ...state, loading: true, error: null };
    },
    fetchError(state, action) {
      const { error } = action.payload;
      return { ...state, loading: false, error };
    },
    fetchSuccess(state, action) {
      return {
        ...state,
        loading: false,
        error: null,
      };
    },
  },
})

export const {put, fetchStart, fetchError, fetchSuccess} = usersSlice.actions;
export default usersSlice.reducer;
