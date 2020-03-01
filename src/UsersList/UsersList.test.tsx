import React from 'react';
import { render } from '@testing-library/react';
import { UsersList } from './UsersList';

describe('User list', () => {
  it('should render title', () => {
    const { getByText } = render(<UsersList />);
    const headerText = getByText(/Users list/i);
    expect(headerText).toBeInTheDocument();
  });
});
