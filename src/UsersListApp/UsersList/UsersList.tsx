import React from 'react';

import { IUser } from '../../common';

export interface IUsersListProps {
  users: IUser[];
}

export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(
        ({ id, name, username }: IUser): JSX.Element => {
          return <li key={id}>{`${name} @${username}`}</li>;
        }
      )}
    </ul>
  );
};
