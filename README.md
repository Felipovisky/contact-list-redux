# Corporate Contact List

This project is a corporate contact list application built with React, Redux for state management, and Styled Components for styling. It allows users to manage a list of contacts, including adding, editing, and deleting contact information.

## Features

- **Contact Management**: Add, edit, and delete contacts.
- **Contact List Display**: View a list of all contacts with their details.
- **Detailed View**: Click on a contact to view detailed information.
- **Styled Components**: Consistent styling across the application using Styled Components.
- **Redux State Management**: Efficient state management for contacts using Redux.

## Project Structure

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

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd corporate-contact-list
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Technologies Used

- React
- Redux
- Styled Components
- TypeScript

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.