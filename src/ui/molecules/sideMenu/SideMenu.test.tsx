import React from 'react';
import { render } from 'tests';

import { SideMenu } from './SideMenu';

describe('SideMenu', () => {
  test('renders', () => {
    const { getByTestId } = render(<SideMenu />);

    const element = getByTestId('side-menu');

    expect(element).toBeInTheDocument();
  });
});
