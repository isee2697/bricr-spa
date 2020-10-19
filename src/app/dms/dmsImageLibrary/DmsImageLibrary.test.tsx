import React from 'react';
import { render } from 'tests';

import { DmsImageLibrary } from './DmsImageLibrary';

describe('DmsImageLibrary', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsImageLibrary />,
    );

    const element = getByText('DmsImageLibrary');

    expect(element).toBeInTheDocument();
  });
});
