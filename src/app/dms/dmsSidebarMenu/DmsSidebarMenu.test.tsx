import React from 'react';
import { render } from 'tests';

import { DmsSidebarMenu } from './DmsSidebarMenu';

describe('DmsSidebarMenu', () => {
  test('renders', () => {
    const { getByText } = render(
      <DmsSidebarMenu />,
    );

    const element = getByText('DmsSidebarMenu');

    expect(element).toBeInTheDocument();
  });
});
