import React from 'react';

import { fireEvent, render } from 'tests';
import { HomeIcon } from '../icons';

import { TileRadio } from './TileRadio';

describe('TileRadio', () => {
  it('render correctly', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <TileRadio onClick={onClick} isSelected={false} title="Test tile radio">
        <HomeIcon color="inherit" />
      </TileRadio>,
    );

    expect(getByText('Test tile radio')).toBeInTheDocument();
  });

  it('render selected', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <TileRadio onClick={onClick} isSelected title="Test tile radio">
        <HomeIcon color="inherit" />
      </TileRadio>,
    );

    const element = getByTestId('select-card');

    expect(element.querySelectorAll('svg').length).toEqual(1);
  });

  it('fire onclick', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <TileRadio onClick={onClick} isSelected title="Test tile radio">
        <HomeIcon color="inherit" />
      </TileRadio>,
    );

    const element = getByTestId('select-card');

    fireEvent.click(element);

    expect(onClick).toBeCalled();
  });
});
