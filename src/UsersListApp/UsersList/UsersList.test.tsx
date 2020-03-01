import React from 'react';
import { render } from '@testing-library/react';
import { UsersList, IUsersListProps } from './UsersList';

describe('User list', () => {
  let props: IUsersListProps;
  beforeEach(() => {
    props = {
      users: [
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
      ]
    };
  });

  it('should render 2 users', () => {
    const { queryAllByTestId } = render(<UsersList {...props} />);
    const items = queryAllByTestId(/user-item/i);
    expect(items.length).toBe(2);
  });

  it('should render properly item', () => {
    const { queryByText } = render(<UsersList {...props} />);
    expect(queryByText('Leanne Graham @Bret')).toBeInTheDocument();
  });
});
