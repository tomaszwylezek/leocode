import React from 'react';

import { IUser } from '../../common';

import { UserListItem } from './UserListItem/UserListItem';

export interface IUsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(
        (user: IUser): JSX.Element => {
          return <UserListItem key={user.id} {...user} />;
        }
      )}
    </ul>
  );
};
