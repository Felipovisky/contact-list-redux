import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact, ContactState } from '../../types';

const initialState: ContactState = {
  items: [],
  loading: false,
  error: null
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.items.push(action.payload);
    },
    removeContact(state, action: PayloadAction<string>) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    editContact(state, action: PayloadAction<Contact>) {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  }
});

export const { 
  addContact, 
  removeContact, 
  editContact,
  setLoading,
  setError 
} = contactsSlice.actions;

export default contactsSlice.reducer;