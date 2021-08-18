import { createReducer, combineReducers } from "@reduxjs/toolkit";
import action from "./action";
import { fetchContactsList, addContact, deleteContact } from "redux/operation";

const items = createReducer([], {
  [fetchContactsList.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [action.changeFilter]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContactsList.pending]: () => true,
  [fetchContactsList.fulfilled]: () => false,
  [fetchContactsList.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, action) => action.payload,
  [fetchContactsList.pending]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,

  [deleteContact.rejected]: (_, action) => action.payload,
  [deleteContact.pending]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
