import React from 'react';

import { render } from 'tests';
import { BuildingIcon } from '../../../atoms/icons';
import { CheckboxGroupField } from '../../../../form/fields';

import { FilterTabPanel } from './FilterTabPanel';

describe('FilterTabPanel', () => {
  test('filters search options', () => {
    const onDeleteFilter = jest.fn();
    const onSearch = jest.fn();

    const { findByText } = render(
      <FilterTabPanel
        filterType={'checkbox'}
        activeTab={2}
        id={2}
        options={[
          { icon: <BuildingIcon />, label: 'Apartment', value: 'Apartment' },
          { icon: <BuildingIcon />, label: 'House', value: 'House' },
          { icon: <BuildingIcon />, label: 'Commercial', value: 'Commercial' },
          { icon: <BuildingIcon />, label: 'Agricultural', value: 'Agricultural' },
          { icon: <BuildingIcon />, label: 'ParkingLot', value: 'ParkingLot' },
          { icon: <BuildingIcon />, label: 'BuildingPlot', value: 'BuildingPlot' },
        ]}
        onDeleteFilter={onDeleteFilter}
        onSearch={onSearch}
        children={
          <CheckboxGroupField
            name={'propertyTypes'}
            options={[
              { icon: <BuildingIcon />, label: 'Apartment', value: 'Apartment' },
              { icon: <BuildingIcon />, label: 'House', value: 'House' },
              { icon: <BuildingIcon />, label: 'Commercial', value: 'Commercial' },
              { icon: <BuildingIcon />, label: 'Agricultural', value: 'Agricultural' },
              { icon: <BuildingIcon />, label: 'ParkingLot', value: 'ParkingLot' },
              { icon: <BuildingIcon />, label: 'BuildingPlot', value: 'BuildingPlot' },
            ]}
          />
        }
      />,
    );
  });
});
