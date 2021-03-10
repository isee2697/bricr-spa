import React from 'react';

import { render } from 'tests';

import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  test('renders correctly', () => {
    const { getAllByRole } = render(<CircularProgress size={18} role="test-circular-progress" />);

    const elements = getAllByRole('test-circular-progress');

    expect(elements.length).toBeGreaterThan(1);
  });

  test('renders correct size', () => {
    const size = 18;
    const { getAllByRole } = render(<CircularProgress size={size} role="test-circular-progress" />);

    const elements = getAllByRole('test-circular-progress');

    expect(elements[0]).toHaveStyle(`height: ${size}px;`);
  });
});
