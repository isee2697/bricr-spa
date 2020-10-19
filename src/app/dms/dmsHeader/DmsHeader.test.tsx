import React from 'react';
import { render } from 'tests';

import { DmsHeader } from './DmsHeader';

describe('DmsHeader', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsHeader />,
    );

    const element = getByText('DmsHeader');

    expect(element).toBeInTheDocument();
  });
});
