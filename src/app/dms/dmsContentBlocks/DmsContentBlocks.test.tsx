import React from 'react';
import { render } from 'tests';

import { DmsContentBlocks } from './DmsContentBlocks';

describe('DmsContentBlocks', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsContentBlocks />,
    );

    const element = getByText('DmsContentBlocks');

    expect(element).toBeInTheDocument();
  });
});
