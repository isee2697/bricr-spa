import React from 'react';

import { render } from 'tests';

import { SelectCard } from './SelectCard';

describe('SelectCard', () => {
  test('renders', () => {
    const { getByTestId } = render(
      <SelectCard centered onClick={() => {}}>
        Other
      </SelectCard>,
    );

    const element = getByTestId('select-card');

    expect(element).toBeInTheDocument();
  });
});
