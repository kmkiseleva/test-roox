import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './fetchUsers';


const store = configureStore({
  reducer: {
    usersSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
