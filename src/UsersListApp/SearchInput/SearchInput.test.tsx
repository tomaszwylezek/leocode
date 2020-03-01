import React from 'react';
import { render } from '@testing-library/react';
import { SearchInput, ISearchInputProps } from './SearchInput';

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
