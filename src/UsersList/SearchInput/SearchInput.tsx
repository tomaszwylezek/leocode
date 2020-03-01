import React, { SyntheticEvent } from 'react';
import styles from './SearchInput.module.scss';

export interface ISearchInputProps {
  value: string;
  handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ value, handleChange }) => {
  return (
    <input
      value={value}
      onChange={handleChange}
      className={styles.input}
      data-testid="search-input"
      type="text"
      placeholder="Search by user name..."
    />
  );
};
