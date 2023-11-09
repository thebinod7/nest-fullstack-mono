// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header } from '@app-nx/libs/header';
import NxWelcome from './nx-welcome';

import UsersList from './users/List';

export function App() {
  return (
    <div>
      <Header />

      <div>
        <h4>DB Users:</h4>
        <hr />
        <UsersList />
      </div>
    </div>
  );
}

export default App;
