import React from 'react';
import { render } from 'tests';

import { Loader } from './Loader';

describe('Loader', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Loader />);
    const element = getByRole('progressbar');
    expect(element).toBeInTheDocument();
  });
});
