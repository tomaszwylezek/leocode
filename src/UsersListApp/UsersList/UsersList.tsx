import React from 'react';

import styles from './UsersList.module.scss';
import { IUser } from '../../common';

import { UserListItem } from './UserListItem/UserListItem';

export interface IUsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
  return (
    <ul className={styles.list}>
      {users.map(
        (user: IUser): JSX.Element => {
          return <UserListItem key={user.id} {...user} />;
        }
      )}
    </ul>
  );
};
