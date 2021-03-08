import React from 'react';

import { render } from 'tests';

import { Menu } from './Menu';

import { MenuItem } from '..';

describe('Menu', () => {
  it('render correctly', () => {
    const onClose = jest.fn();

    const { getByText } = render(
      <Menu open onClose={onClose} id="test-menu">
        <MenuItem value="bottom-end">bottom-end</MenuItem>
      </Menu>,
    );

    expect(getByText('bottom-end')).toBeTruthy();
  });
});
