import * as contactsAPI from "services/contactsAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContactsList = createAsyncThunk(
  "fethContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = { name, number };
      const { data } = await contactsAPI.createContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
