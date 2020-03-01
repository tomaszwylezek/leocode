import React from 'react';

import styles from './UserListItem.module.scss';

import { IUser } from '../../../common';

export interface IUserListItemProps extends IUser {}

export const UserListItem: React.FC<IUserListItemProps> = ({ id, name, username }) => {
  return (
    <li className={styles.item} data-testid={`user-item-${id}`}>
      <span className={styles.id}>{id}.</span>
      {`${name} `}
      <span className={styles.username}>@{username}</span>
    </li>
  );
};
