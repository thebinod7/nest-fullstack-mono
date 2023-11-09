// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@app-nx/libs/header';
import NxWelcome from './nx-welcome';

import UsersList from './users/List';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <NxWelcome title="admin" />

      <Header />

      <div>
        <h4>PG Users:</h4>
        <UsersList />
      </div>
    </div>
  );
}

export default App;
