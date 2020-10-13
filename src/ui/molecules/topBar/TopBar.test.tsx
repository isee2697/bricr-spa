import React from 'react';
import { render } from 'tests';

import { TopBar } from './TopBar';

describe('TopBar', () => {
  test('renders', () => {
    const { getByText } = render(<TopBar>TopBar</TopBar>);

    const element = getByText('TopBar');

    expect(element).toBeInTheDocument();
  });
});
