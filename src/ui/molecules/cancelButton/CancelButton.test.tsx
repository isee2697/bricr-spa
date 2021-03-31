import React from 'react';

import { fireEvent, render } from 'tests';

import { CancelButton } from './CancelButton';

describe('CancelButton', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { container } = render(<CancelButton onClick={onClick} />);

    fireEvent.click(container.querySelector('button')!);

    expect(onClick).toBeCalled();
  });
});
