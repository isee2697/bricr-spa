import React from 'react';

import { Box } from 'ui/atoms';
import { render, wait } from 'tests';

import { Map } from './Map';

describe('Map', () => {
  test('render correctly', () => {
    const { container, getByText } = render(
      <Box height={300}>
        <Map />
      </Box>,
    );

    expect(getByText('Loading...')).toBeInTheDocument();

    wait(() => {
      expect(container.querySelector('.esri-view')).toBeInTheDocument();
    });
  });
});
