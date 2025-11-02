import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeContact } from '../../features/contacts/contactsSlice';
import Button from '../UI/Button';
import { Contact } from '../../types';

interface ContactCardProps {
  contact: Contact;
}

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const ContactInfo = styled.div`
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  margin-bottom: 0.5rem;
  color: #333;
`;

const Info = styled.p`
  color: #666;
  margin: 0.25rem 0;
`;

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <Card>
      <ContactInfo>
        <Name>{contact.name}</Name>
        <Info>{contact.email}</Info>
        <Info>{contact.phone}</Info>
      </ContactInfo>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  );
};

export default ContactCard;