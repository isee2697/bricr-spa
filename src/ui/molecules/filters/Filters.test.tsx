import React from 'react';
import { GridSize } from '@material-ui/core';

import { render, fireEvent } from 'tests';
import { BuildingIcon } from '../../atoms/icons';

import { Filters } from './Filters';

describe('Filter', () => {
  test('filters search options', async () => {
    const onClose = jest.fn();
    const onDeleteFilter = jest.fn();
    const onTabChange = jest.fn();
    const onSubmit = jest.fn();

    const { findByTestId } = render(
      <Filters
        data={{ propertyTypes: ['Apartment', 'House'] }}
        filterAmount={2}
        isOpened={true}
        activeTab={2}
        onSubmit={onSubmit}
        onTabChange={onTabChange}
        onDeleteFilter={onDeleteFilter}
        onClose={onClose}
        filters={[
          {
            key: 'propertyTypes',
            type: 'checkbox',
            size: 6 as GridSize,
            options: [
              { icon: <BuildingIcon />, label: 'Apartment', value: 'Apartment' },
              { icon: <BuildingIcon />, label: 'House', value: 'House' },
              { icon: <BuildingIcon />, label: 'Commercial', value: 'Commercial' },
              { icon: <BuildingIcon />, label: 'Agricultural', value: 'Agricultural' },
              { icon: <BuildingIcon />, label: 'ParkingLot', value: 'ParkingLot' },
              { icon: <BuildingIcon />, label: 'BuildingPlot', value: 'BuildingPlot' },
            ],
          },
        ]}
      />,
    );

    const filters = await findByTestId('propertyTypes');

    expect(filters).toBeInTheDocument();
    // expect(filter).toBeInTheDocument();
    //
    // fireEvent.change(getByTestId('simple-search'), { target: { value: 'none' } });
    // expect(onTabChange).toBeCalledWith({ target: { value: 'none' } });
    // expect(filter).not.toBeInTheDocument();
  });
});
