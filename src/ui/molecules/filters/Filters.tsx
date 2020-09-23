import React, { useState } from 'react';

import { AppRoute } from 'routing/AppRoute.enum';
import { Box, Grid, SidebarTitleTile } from 'ui/atoms';
import { HomeIcon, SettingsIcon, UserIcon, BuildingIcon } from 'ui/atoms/icons';
import { Modal } from '../modal/Modal';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';

import { Checkboxes } from './filter-types/Checkboxes';
import { Range } from './filter-types/Range';
import { filtersTypes } from './Filters.types';

const sizeM = 6;
const sizeL = 12;

const filters: filtersTypes[] = [
  {
    key: 'filters.price_range',
    type: 'range',
    size: sizeL,
  },
  {
    key: 'filter.object_type.title',
    type: 'checkbox',
    size: sizeM,
    options: [
      { label: 'Custom name of object type 1', value: '1', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 2', value: '2', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 3', value: '3', icon: <BuildingIcon /> },
      { label: 'Custom name of object type 4', value: '4', icon: <BuildingIcon /> },
    ],
  },
  {
    key: 'filter.account_managers.title',
    type: 'checkbox',
    size: sizeL,
    options: [
      { label: 'Victor Martin Brochner', value: '1', icon: <UserIcon /> },
      { label: 'Victor Martin Brochner', value: '2', icon: <UserIcon /> },
      { label: 'Victor Martin Brochner', value: '3', icon: <UserIcon /> },
    ],
  },
];

export const Filters = () => {
  const [isOpened, toggleOpen] = useState(true);

  return (
    <Modal title="Filters for property list" isOpened={isOpened}>
      <Grid container spacing={0}>
        <SidebarMenu filters={filters} />
        <Box flex={1} padding={3}>
          <Grid item xs={12}>
            {filters.map(filter => {
              if (filter.type === 'range') {
                return (
                  <Range
                    key={filter.key}
                    title={filter.key}
                    valueStart={0}
                    valueEnd={500000}
                    suffix={'€'}
                    onChange={e => console.log(e)}
                  />
                );
              } else if (filter.type === 'checkbox' && filter.options && filter.size) {
                return (
                  <Checkboxes
                    key={filter.key}
                    name={filter.key}
                    options={filter.options}
                    onChange={e => console.log(e)}
                    xs={filter.size}
                  />
                );
              }

              return null;
            })}
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
};
