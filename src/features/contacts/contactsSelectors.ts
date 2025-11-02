import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types';

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectContactById = (contactId: string) =>
  createSelector(selectContacts, (contacts) =>
    contacts.find((contact) => contact.id === contactId)
  );

export const selectContactsLoading = (state: RootState) => state.contacts.loading;

export const selectContactsError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = (filter: string) =>
  createSelector(selectContacts, (contacts) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  );