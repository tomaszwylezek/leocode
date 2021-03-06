import React, { SyntheticEvent, useState, useEffect, useMemo } from 'react';
import styles from './UsersListApp.module.scss';

import { IUser } from '../common';

import { SearchInput } from './SearchInput/SearchInput';
import { UsersList } from './UsersList/UsersList';

export const UsersListApp: React.FC = () => {
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    (async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        const data = await response.json();

        setUsers(data);
      } catch (e) {}
    })();

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const filteredUsers = useMemo(() => {
    return users?.filter(user => {
      return user.name.toLowerCase().includes(searchInput.toLowerCase());
    });
  }, [users, searchInput]);

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
        {!filteredUsers ? 'Loading' : <UsersList users={filteredUsers} />}
      </main>
    </div>
  );
};
