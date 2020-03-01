import React from 'react';
import { render } from '@testing-library/react';
import { UsersListApp } from './UsersListApp';

describe('User list', () => {
  it('should render title', () => {
    const { getByText } = render(<UsersListApp />);
    const headerText = getByText(/Users list/i);
    expect(headerText).toBeInTheDocument();
  });
});
