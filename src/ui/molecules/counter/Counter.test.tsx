import React from 'react';

import { render } from 'tests';

import { Counter } from './Counter';

describe('Counter', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Counter count={12} />);

    expect(getByText('12')).toBeInTheDocument();
  });

  test('margin right', () => {
    const { getByText } = render(<Counter count={12} hasMarginRight />);

    expect(getByText('12')).toHaveStyle('margin-right: 8px');
  });

  test('margin left', () => {
    const { getByText } = render(<Counter count={12} hasMarginLeft />);

    expect(getByText('12')).toHaveStyle('margin-left: 8px');
  });
});
