import React, { useState } from 'react';

import { useStyles } from '../Filters.styles';
import { Tabs, Tab } from 'ui/atoms';
import { FilterSidenavProps, FiltersTypes } from '../Filters.types';

export const FilterSideMenu = ({ filters, onChange }: FilterSidenavProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(filters[0].value);

  const handleTabChange = (tab: FiltersTypes) => {
    setValue(tab.value);
    onChange(tab);
  };

  return (
    <Tabs value={value} indicatorColor="primary" textColor="primary" orientation="vertical">
      {filters.map((item: FiltersTypes) => {
        return (
          <Tab
            className={classes.filterSiderTab}
            key={item.key}
            label={item.key}
            onClick={() => handleTabChange(item)}
          />
        );
      })}
    </Tabs>
  );
};
