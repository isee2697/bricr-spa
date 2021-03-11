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

    const tileButton = getByText('Tile button');
    const parent = tileButton.parentElement;

    expect(parent).toBeTruthy();

    fireEvent.click(parent!);

    expect(onClick).not.toBeCalled();
  });
});
