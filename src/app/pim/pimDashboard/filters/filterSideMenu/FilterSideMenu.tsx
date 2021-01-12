import React, { useCallback, useEffect, useState } from 'react';

import { useLocale } from 'hooks';
import { useStyles } from '../Filters.styles';
import { SideMenuItem } from 'ui/atoms';
import { FilterSidenavProps, FiltersTypes } from '../Filters.types';
import { CheckIcon } from 'ui/atoms/icons';
import { SideMenu } from 'ui/molecules/sideMenu/SideMenu';

export const FilterSideMenu = ({ filters, onChange, selectedFilters }: FilterSidenavProps) => {
  const { formatMessage } = useLocale();
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
    <SideMenu>
      {filters.map((item: FiltersTypes, i) => {
        return (
          <SideMenuItem
            className={classes.filterTab + ' pim-side-menu-item'}
            key={i}
            title={formatMessage({ id: 'filters.' + item.key + '.title' })}
            icon={
              selectedFilters &&
              (selectedFilters[item.key] ||
                selectedFilters[item.key + '_from'] ||
                selectedFilters[item.key + '_to']) && <CheckIcon />
            }
            selected={i === value}
            onClick={() => handleTabChange(i)}
          />
        );
      })}
    </SideMenu>
  );
};
