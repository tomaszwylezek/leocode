import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UsersListApp } from './UsersListApp';
import fetch from 'jest-fetch-mock';

describe('User list app', () => {
  it('should render title', () => {
    const { getByText } = render(<UsersListApp />);
    const headerText = getByText(/Users list/i);
    expect(headerText).toBeInTheDocument();
  });

  it('should render list', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {},
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {}
        },
        {
          id: 2,
          name: 'Ervin  Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {},
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {}
        }
      ])
    );
    const { findByTestId } = render(<UsersListApp />);
    expect(await findByTestId('user-item-1')).toBeInTheDocument();
  });

  it('should render only proper user after filtering', async () => {
    fetch.mockResponse(
      JSON.stringify([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {},
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {}
        },
        {
          id: 2,
          name: 'Ervin  Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {},
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {}
        }
      ])
    );
    const { findByTestId, findAllByTestId, debug } = render(<UsersListApp />);

    const input = await findByTestId('search-input');

    fireEvent.change(input, { target: { value: 'Leanne' } });

    const items = await findAllByTestId(/user-item/i);
    expect(items.length).toBe(1);
  });
});
