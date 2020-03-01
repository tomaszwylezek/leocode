import React, { SyntheticEvent, useState, useEffect, useMemo } from 'react';
import styles from './UsersListApp.module.scss';

import { SearchInput } from './SearchInput/SearchInput';
import { IUser } from '../common';
import { UsersList } from './UsersList/UsersList';

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
