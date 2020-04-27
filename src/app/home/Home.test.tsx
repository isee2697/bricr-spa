import React from 'react';

import { render } from 'tests';

import { Home } from './Home';

describe('Home', () => {
  test('renders correctly', () => {
    const { getAllByRole } = render(<Home />);
    const element = getAllByRole('button');
    expect(element.length).toEqual(2);
  });
});
