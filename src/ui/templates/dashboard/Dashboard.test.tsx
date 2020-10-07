import React from 'react';
import { render } from 'tests';

import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
  test('renders', () => {
    const { getByText, getAllByRole } = render(<Dashboard>Test</Dashboard>);

    const element = getByText('Test');

    expect(element).toBeInTheDocument();

    expect(getAllByRole('tab').length).toEqual(4);
  });
});
