import React from 'react';

import { fireEvent, render, wait } from 'tests';

import { Switch } from './Switch';

describe('Switch', () => {
  test('render correctly', () => {
    const onChange = jest.fn();

    const { container } = render(<Switch onChange={onChange} />);

    fireEvent.click(container.querySelector('.MuiSwitch-root')!);

    wait(() => {
      expect(onChange).toBeCalled();
    });
  });
});
