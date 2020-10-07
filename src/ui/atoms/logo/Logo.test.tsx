import React from 'react';
import { render } from 'tests';

import { Logo } from './Logo';

describe('Logo', () => {
  test('renders', () => {
    const { getByRole } = render(<Logo />);

    const element = getByRole('img');

    expect(element).toBeInTheDocument();
  });
});
