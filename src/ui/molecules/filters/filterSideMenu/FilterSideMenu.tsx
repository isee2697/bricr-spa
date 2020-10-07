import React, { useCallback, useEffect, useState } from 'react';
import { useStyles } from '../Filters.styles';
import { Tabs, Tab } from 'ui/atoms';
import { FilterSidenavProps, FiltersTypes } from '../Filters.types';

export const FilterSideMenu = ({ filters, onChange }: FilterSidenavProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = useCallback(
    (index: number) => {
      setValue(index);
      onChange(index);
    },
    [onChange, setValue],
  );

  useEffect(() => {
    handleTabChange(value);
  }, [value, handleTabChange]);

  return (
    <Tabs value={value} indicatorColor="primary" textColor="primary" orientation="vertical">
      {filters.map((item: FiltersTypes, i) => {
        return <Tab className={classes.filterSiderTab} key={i} label={item.key} onClick={() => handleTabChange(i)} />;
      })}
    </Tabs>
  );
};
