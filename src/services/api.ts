import axios from 'axios';
import { Contact } from '../types';

const API_URL = 'https://api.example.com/contacts';

export const getContacts = async (): Promise<Contact[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addContact = async (contact: Contact): Promise<Contact> => {
    const response = await axios.post(API_URL, contact);
    return response.data;
};

export const deleteContact = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateContact = async (id: string, contact: Contact): Promise<Contact> => {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
};