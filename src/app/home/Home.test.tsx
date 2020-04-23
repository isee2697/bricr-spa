import React from 'react';

import { render } from 'tests';

import { Home } from './Home';

describe('Home', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Home />);
    const element = getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
