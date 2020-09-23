import React from 'react';

import { Tabs, Tab } from 'ui/atoms';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';

import { FilterSidenavProps } from './FilterSideMenu.types';

export const FilterSideMenu = ({ filters }: FilterSidenavProps) => {
  return (
    <Tabs value={0} indicatorColor="primary" textColor="primary" orientation="vertical">
      {filters.map(item => {
        return <Tab key={item.key} label={item.key} icon={<HomeIcon color="inherit" />} />;
      })}
    </Tabs>
  );
};
