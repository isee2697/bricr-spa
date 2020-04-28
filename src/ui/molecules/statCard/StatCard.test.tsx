import React from 'react';

import { render } from 'tests';

import { StatCard } from './StatCard';

describe('StatCard', () => {
  test('renders', () => {
    const { getByText } = render(
      <StatCard value={200} variant="error" endAdornment="$">
        Test
      </StatCard>,
    );

    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('200$')).toBeInTheDocument();
  });
});
