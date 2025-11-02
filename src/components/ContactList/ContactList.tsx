import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ContactCard from '../ContactCard/ContactCard';
import styled from 'styled-components';
import { Contact } from '../../types';

const ListContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.items);

    return (
        <ListContainer>
            {contacts.map((contact: Contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </ListContainer>
    );
};

export default ContactList;