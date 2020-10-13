import React from 'react';
import { render } from 'tests';

import { Page } from './Page';

describe('Page', () => {
  test('renders', () => {
    const { getByText } = render(<Page withoutHeader>Test</Page>);

    const element = getByText('Test');

    expect(element).toBeInTheDocument();
  });
});
