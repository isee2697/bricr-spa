import React from 'react';
import { render } from 'tests';

import { Search } from './Search';

describe('Search', () => {
  test('renders', () => {
    const { getByRole } = render(<Search options={[{ title: 'My search title', type: 'email' }]} />);

    const element = getByRole('textbox');

    expect(element).toBeInTheDocument();
  });
});
