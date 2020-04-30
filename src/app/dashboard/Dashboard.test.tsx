import React from 'react';

import { render } from 'tests';

import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
  test('renders correctly', () => {
    const { getAllByRole } = render(<Dashboard />);
    const element = getAllByRole('button');
    expect(element.length).toEqual(10);
  });
});
