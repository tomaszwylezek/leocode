import React, { SyntheticEvent, useState } from 'react';
import styles from './UsersList.module.scss';

import { SearchInput } from './SearchInput/SearchInput';

export const UsersList: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');
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
      </main>
    </div>
  );
};
