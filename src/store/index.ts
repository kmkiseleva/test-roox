import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './fetchUsers';
import contactsSlice from "./contactsReducer";


const store = configureStore({
  reducer: {
    usersSlice,
    contactsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
