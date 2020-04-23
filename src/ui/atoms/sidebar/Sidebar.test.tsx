import React from 'react';

import { render } from 'tests';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('renders', () => {
    const { getByText } = render(
      <Sidebar>
        <div>top</div>
        <Sidebar.Divider />
        <div>bottom</div>
      </Sidebar>,
    );

    expect(getByText('top')).toBeInTheDocument();
    expect(getByText('bottom')).toBeInTheDocument();
  });
});
