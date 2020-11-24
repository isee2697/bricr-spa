import React from 'react';

import { render } from 'tests';

import { MultiSearch } from './MultiSearch';

describe('Search', () => {
  test('renders', () => {
    const { getByRole } = render(<MultiSearch options={[{ title: 'My search title', type: 'email' }]} />);

    const element = getByRole('textbox');

    expect(element).toBeInTheDocument();
  });
});
