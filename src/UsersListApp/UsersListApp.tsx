import React, { SyntheticEvent, useState, useEffect } from 'react';
import styles from './UsersListApp.module.scss';

import { SearchInput } from './SearchInput/SearchInput';
import { IUser } from '../common';

export const UsersListApp: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    (async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setUsers(data);
    })();
  }, []);
  return (
    <div className={styles.usersList}>
      <header>
        <h1 className={styles.title}>Users list</h1>
      </header>
      <main>
        <SearchInput
          value={searchInput}
          handleChange={(event: SyntheticEvent<HTMLInputElement>) => {
            setSearchInput(event.currentTarget.value);
          }}
        />
        {!users ? (
          'Loading'
        ) : (
          <ul>
            {users.map(
              ({ id, name, username }: IUser): JSX.Element => {
                return <li key={id}>{`${name} @${username}`}</li>;
              }
            )}
          </ul>
        )}
        <ul>{}</ul>
      </main>
    </div>
  );
};
