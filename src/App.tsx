import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ContactsPage from './pages/ContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Header>
          <h1>Lista de Contatos Corporativa</h1>
        </Header>
        <Switch>
          <Route exact path="/" component={ContactsPage} />
          <Route path="/contact/:id" component={ContactDetailPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;