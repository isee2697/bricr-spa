import React from 'react';
import { render } from 'tests';

import { DmsDocuments } from './DmsDocuments';

describe('DmsDocuments', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsDocuments />,
    );

    const element = getByText('DmsDocuments');

    expect(element).toBeInTheDocument();
  });
});
