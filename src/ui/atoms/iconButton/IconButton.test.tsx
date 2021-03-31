import React from 'react';

import { fireEvent, render, wait } from 'tests';
import { AddIcon } from '../icons';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { container } = render(
      <IconButton onClick={onClick}>
        <AddIcon color="inherit" />
      </IconButton>,
    );

    fireEvent.click(container.querySelector('button')!);

    wait(() => {
      expect(onClick).toBeCalled();
    });
  });
});
