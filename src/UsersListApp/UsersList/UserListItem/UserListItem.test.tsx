import React from 'react';
import { render } from '@testing-library/react';
import { IUserListItemProps, UserListItem } from './UserListItem';

// Not sure why IDE does not recognise it - there is no error in console and it's in setupTests and all is working fine
// Added only to disable IDE highlighting 'that something is wrong'
import '@testing-library/jest-dom/extend-expect';

describe('User list', () => {
  let props: IUserListItemProps;
  beforeEach(() => {
    props = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {},
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {}
    };
  });

  it('should render properly item', () => {
    const { queryByText } = render(<UserListItem {...props} />);
    expect(queryByText('1.')).toBeInTheDocument();
    expect(queryByText('Leanne Graham')).toBeInTheDocument();
    expect(queryByText('@Bret')).toBeInTheDocument();
  });
});
