import React from 'react';

import { render } from 'tests';

import { CircledNumber } from './CircledNumber';

describe('CircledNumber', () => {
  test('renders correctly', () => {
    const { getByText } = render(<CircledNumber content={4} />);

    const element = getByText('4');
    expect(element).toBeInTheDocument();
    expect(element).toHaveStyle(`border-radius: 12px`);
  });
});
