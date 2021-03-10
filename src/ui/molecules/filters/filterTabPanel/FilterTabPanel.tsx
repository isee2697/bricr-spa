import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { useStyles } from '../Filters.styles';
import { CheckboxDataType, FilterTabPanelProps } from '../Filters.types';
import { SimpleSearch } from 'ui/molecules/simpleSearch/SimpleSearch';

export const FilterTabPanel = ({
  children,
  activeTab,
  id,
  options,
  filterType,
  onDeleteFilter,
  onSearch,
}: FilterTabPanelProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [search, updateSearch] = useState('');
  const [searchOptions] = useState<CheckboxDataType[] | undefined>(options);
  const handleLinkedSelector = async () => {};

  const handleSearch = (event: React.ChangeEvent<{ value: string }>) => {
    const { value } = event.target;

    updateSearch(value);

    if (options) {
      const newOptions = [...options].filter((option: CheckboxDataType) => option.label.toLowerCase().includes(value));

      if (onSearch) {
        onSearch(newOptions.length > 0 && value.length > 0 ? newOptions : searchOptions);
      }
    }
  };

  return (
    <div role="tabpanel" hidden={activeTab !== id} id={`simple-tabpanel-${id}`} aria-labelledby={`simple-tab-${id}`}>
      <Grid container className={classes.tabContentHeader} justify="space-between">
        <span className="linked_selector" onClick={handleLinkedSelector}>
          {formatMessage({ id: 'linked_account_property' })}
        </span>
        <span className="delete_filter" onClick={onDeleteFilter}>
          {formatMessage({ id: 'delete_filter' })}
        </span>
      </Grid>

      {filterType === 'checkbox' && (
        <Grid item className={classes.tabSearchWrapper}>
          <SimpleSearch value={search} onChange={handleSearch} />
        </Grid>
      )}
      {activeTab === id && children}
    </div>
  );
};
