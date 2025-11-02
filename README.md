# Lista de Contatos Corporativa

Este projeto é uma aplicação de lista de contatos corporativos construída com React, Redux para gerenciamento de estado e Styled Components para estilização. Permite que os usuários gerenciem uma lista de contatos, incluindo adicionar, editar e excluir informações de contato.

## Funcionalidades

- **Gerenciamento de Contatos**: Adicionar, editar e excluir contatos.
- **Exibição da Lista de Contatos**: Visualizar uma lista de todos os contatos com seus detalhes.
- **Visualização Detalhada**: Clicar em um contato para ver informações detalhadas.
- **Styled Components**: Estilização consistente em toda a aplicação usando Styled Components.
- **Gerenciamento de Estado com Redux**: Gerenciamento eficiente do estado dos contatos usando Redux.

## Estrutura do Projeto

```
corporate-contact-list
├── public
│   └── index.html
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── ContactCard
│   │   │   └── ContactCard.tsx
│   │   ├── ContactList
│   │   │   └── ContactList.tsx
│   │   └── UI
│   │       └── Button.tsx
│   ├── pages
│   │   ├── ContactsPage.tsx
│   │   └── ContactDetailPage.tsx
│   ├── features
│   │   └── contacts
│   │       ├── contactsSlice.ts
│   │       └── contactsSelectors.ts
│   ├── store
│   │   └── index.ts
│   ├── hooks
│   │   └── useContacts.ts
│   ├── services
│   │   └── api.ts
│   ├── styles
│   │   ├── GlobalStyle.ts
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       └── validators.ts
├── package.json
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
└── README.md
```

## Começando

1. Clone o repositório:
   git clone <repository-url>

2. Navegue até o diretório do projeto:
   cd corporate-contact-list

3. Instale as dependências:
   npm install

4. Inicie o servidor de desenvolvimento:
   npm start

## Tecnologias Utilizadas

- React
- Redux
- Styled Components
- TypeScript

## Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para melhorias ou correções de bugs.

## Licença

Este projeto está licenciado sob a Licença MIT.
