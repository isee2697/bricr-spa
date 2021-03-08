import React from 'react';

import { fireEvent, render } from 'tests';
import { HomeIcon } from '../icons';

import { TileCheckbox } from './TileCheckbox';

describe('TileCheckbox', () => {
  it('render correctly', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <TileCheckbox onClick={onClick} isSelected={false} title="Test tile checkbox">
        <HomeIcon color="inherit" />
      </TileCheckbox>,
    );

    expect(getByText('Test tile checkbox')).toBeInTheDocument();
  });

  it('render selected', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <TileCheckbox onClick={onClick} isSelected title="Test tile checkbox">
        <HomeIcon color="inherit" />
      </TileCheckbox>,
    );

    const element = getByTestId('select-card');

    expect(element.querySelectorAll('svg').length).toEqual(1);
  });

  it('fire onclick', () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <TileCheckbox onClick={onClick} isSelected title="Test tile checkbox">
        <HomeIcon color="inherit" />
      </TileCheckbox>,
    );

    const element = getByTestId('select-card');

    fireEvent.click(element);

    expect(onClick).toBeCalled();
  });
});
