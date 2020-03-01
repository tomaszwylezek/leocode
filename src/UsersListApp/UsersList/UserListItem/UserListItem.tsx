import React from 'react';

import { IUser } from '../../../common';

export interface IUserListItemProps extends IUser {}

export const UserListItem: React.FC<IUserListItemProps> = ({ id, name, username }) => {
  return <li data-testid={`user-item-${id}`}>{`${name} @${username}`}</li>;
};
