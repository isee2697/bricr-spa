import React from 'react';

import { render } from 'tests';

import { Price } from './Price';

describe('Price', () => {
  it('render correctly', () => {
    const { getByText } = render(<Price value={25.3252} minimumFractionDigits={1} maximumFractionDigits={3} />);

    expect(getByText('€25.325')).toBeTruthy();
  });

  it('minimum fraction digits filled with 0', () => {
    const { getByText } = render(<Price value={25.3} minimumFractionDigits={2} maximumFractionDigits={3} />);

    expect(getByText('€25.30')).toBeTruthy();
  });
});
