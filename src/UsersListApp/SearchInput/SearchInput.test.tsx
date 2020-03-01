import React from 'react';
import { render } from '@testing-library/react';
import { SearchInput, ISearchInputProps } from './SearchInput';

// Not sure why IDE does not recognise it - there is no error in console and it's in setupTests and all is working fine
// Added only to disable IDE highlighting 'that something is wrong'
import '@testing-library/jest-dom/extend-expect';

describe('Search input', () => {
  let props: ISearchInputProps;
  beforeEach(() => {
    props = {
      value: '',
      handleChange: jest.fn()
    };
  });

  it('should render input', () => {
    const { getByTestId } = render(<SearchInput {...props} />);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });
});
