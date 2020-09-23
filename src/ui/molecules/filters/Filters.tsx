import React from 'react';
import { GridSize } from '@material-ui/core';

import { AppRoute } from 'routing/AppRoute.enum';
import { Box, Grid, SidebarTitleTile } from 'ui/atoms';
import { HomeIcon, SettingsIcon, UserIcon } from 'ui/atoms/icons';
import { Modal } from '../modal/Modal';
import { SidebarMenu } from '../sidebarMenu/SidebarMenu';

import { Checkboxes } from './filter-types/Checkboxes';
import { Range } from './filter-types/Range';
import { filtersTypes } from './Filters.types';

const menu = {
  url: '/',
  back: {
    url: AppRoute.home,
    title: 'Go Back',
  },
  groups: [
    {
      isCollapsable: false,
      key: 'settings.menu.general',
      items: [{ key: 'workflowTemplates' }],
    },
  ],
};

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
      { label: 'Custom name of object type 1', value: '1', icon: <HomeIcon /> },
      { label: 'Custom name of object type 2', value: '2', icon: <HomeIcon /> },
      { label: 'Custom name of object type 3', value: '3', icon: <HomeIcon /> },
      { label: 'Custom name of object type 4', value: '4', icon: <HomeIcon /> },
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
  console.log(filters);

  return (
    <Modal fullWidth title="Filters for property list" isOpened={true}>
      <Grid container spacing={0}>
        <SidebarMenu
          onHide={() => false}
          isVisible={true}
          menu={menu}
          translationPrefix="settings.menu"
          menuTitle={<SidebarTitleTile title={'Title'} icon={<SettingsIcon color="inherit" />} />}
        />
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
                console.log(typeof filter.size, typeof 12);

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
            })}
          </Grid>
        </Box>
      </Grid>
    </Modal>
  );
};
