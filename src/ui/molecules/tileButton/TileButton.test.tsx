import React from 'react';

import { fireEvent, render } from 'tests';

import { TileButton } from './TileButton';

describe('TileButton', () => {
  test('render correctly', () => {
    const onClick = jest.fn();

    const { getByText, container } = render(
      <TileButton title={'Tile button'} onClick={onClick} className={'passedClassname'} />,
    );

    expect(getByText('Tile button')).toBeInTheDocument();
    expect(container.querySelector('.passedClassname')).toBeInTheDocument();

    fireEvent.click(getByText('Tile button'));

    expect(onClick).toBeCalled();
  });

  test('disabled', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <TileButton title={'Tile button'} onClick={onClick} className={'passedClassname'} isDisabled />,
    );

    fireEvent.click(getByText('Tile button'));

    expect(onClick).not.toBeCalled();
  });
});
