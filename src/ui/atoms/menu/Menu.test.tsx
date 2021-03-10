import React from 'react';

import { fireEvent, render } from 'tests';

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

  it('on click function', () => {
    const onClose = jest.fn();
    const onClick = jest.fn();

    const { getByText } = render(
      <Menu open onClose={onClose} id="test-menu">
        <MenuItem value="bottom-end" onClick={onClick}>
          bottom-end
        </MenuItem>
      </Menu>,
    );

    const menuItem = getByText('bottom-end');

    expect(menuItem).toBeInTheDocument();

    fireEvent.click(menuItem);

    expect(onClick).toBeCalled();
  });
});
