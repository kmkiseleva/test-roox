import { createSlice } from "@reduxjs/toolkit";

export type TContact = {
  "id": string,
  "name": string,
  "surname": string,
  "number": string
}

export type InitialState = {
  items: Array<TContact>
}

const initialState: InitialState = {
  items: [
    {
      "id": "1",
      "name": "Latife ",
      "surname": "Babacan",
      "number": "+79991111111"
    },
    {
      "id": "2",
      "name": "Dwight ",
      "surname": "Owens",
      "number": "+79992222222"
    },
    {
      "id": "3",
      "name": "Silvia",
      "surname": "Jimenez",
      "number": "+79993333333"
    },
    {
      "id": "4",
      "name": "Noe",
      "surname": "Riviere",
      "number": "+79994444444"
    },
    {
      "id": "5",
      "name": "Samantha",
      "surname": "Moore",
      "number": "+79995555555"
    },
  ]
};

const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState,
  reducers: {
    addUser(state, action) {
      const {name, surname, number} = action.payload;
      const newUser = {
        "name": name,
        "surname": surname,
        "number": number
      }
    },
    editUser(state, action) {
      const {id, name, surname, number} = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      const editedUser = {
        "id": id,
        "name": name,
        "surname": surname,
        "number": number
      }
      state.items.unshift(editedUser);
    },
    removeUser(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    }
  },
})

export const {addUser, editUser, removeUser} = contactsSlice.actions;
export default contactsSlice.reducer;
