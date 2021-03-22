import React from 'react';
import { GridSize } from '@material-ui/core';
import userEvent from '@testing-library/user-event';

import { render } from 'tests';
import { BuildingIcon } from '../../atoms/icons';

import { Filters } from './Filters';
import { ActiveFilters } from './activeFilters/ActiveFilters';

describe('Filter', () => {
  test('filter option not found', async () => {
    const onClose = jest.fn();
    const onDeleteFilter = jest.fn();
    const onTabChange = jest.fn();
    const onSubmit = jest.fn();

    const { findByText, getByPlaceholderText } = render(
      <Filters
        data={{ propertyTypes: ['Apartment', 'House'] }}
        filterAmount={2}
        isOpened={true}
        activeTab={0}
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

    const filter = await findByText('House');

    expect(filter).toBeInTheDocument();

    await userEvent.type(getByPlaceholderText('common.search'), 'none');

    expect(filter).not.toBeInTheDocument();
  });

  test('filter option found', async () => {
    const onClose = jest.fn();
    const onDeleteFilter = jest.fn();
    const onTabChange = jest.fn();
    const onSubmit = jest.fn();

    const { findByText, getByPlaceholderText } = render(
      <Filters
        data={{ propertyTypes: ['Apartment', 'House'] }}
        filterAmount={2}
        isOpened={true}
        activeTab={0}
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

    const filter = await findByText('House');

    expect(filter).toBeInTheDocument();

    await userEvent.type(getByPlaceholderText('common.search'), 'h');

    expect(filter).toBeInTheDocument();
  });

  test('onDelete called', () => {
    const onDelete = jest.fn();

    const { getByText } = render(<ActiveFilters activeFilters={{ city: 'Amsterdam' }} onDelete={onDelete} />);
  });
});
