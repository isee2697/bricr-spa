import React from 'react';

import { render } from 'tests';

import { Tasks } from './Tasks';

describe('Tasks', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Tasks isError={false} />);
  });
});
