import React from 'react';
import { render } from 'tests';

import { LinkTab } from './LinkTab';

describe('LinkTab', () => {
  test('renders', () => {
    const { getByRole } = render(<LinkTab to="/test" label="Test" />);

    const element = getByRole('tab');

    expect(element).toBeInTheDocument();
  });
});
