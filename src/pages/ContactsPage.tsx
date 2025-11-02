import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { RootState } from '../store';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
`;

const ContactsPage: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.items);

    return (
        <PageContainer>
            <Section>
                <Title>Adicionar Novo Contato</Title>
                <ContactForm />
            </Section>
            <Section>
                <Title>Lista de Contatos</Title>
                <ContactList />
            </Section>
        </PageContainer>
    );
};

export default ContactsPage;