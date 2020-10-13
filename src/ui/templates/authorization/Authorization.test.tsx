import React from 'react';
import { render } from 'tests';

import { Authorization } from './Authorization';

describe('Authorization', () => {
  test('renders', () => {
    const { getByText } = render(<Authorization>Authorization</Authorization>);

    const element = getByText('Authorization');

    expect(element).toBeInTheDocument();
  });
});
