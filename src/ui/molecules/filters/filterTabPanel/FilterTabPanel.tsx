import React, { useState } from 'react';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { useStyles } from '../Filters.styles';
import { FilterTabPanelProps } from '../Filters.types';
import { SimpleSearch } from 'ui/molecules/simpleSearch/SimpleSearch';

export const FilterTabPanel = ({ children, activeTab, id, filterType }: FilterTabPanelProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [search, updateSearch] = useState('');

  const handleDeleteFilter = async () => {};

  const handleLinkedSelector = async () => {};

  return (
    <div role="tabpanel" hidden={activeTab !== id} id={`simple-tabpanel-${id}`} aria-labelledby={`simple-tab-${id}`}>
      <Grid container className={classes.tabContentHeader} justify="space-between">
        <span className="linked_selector" onClick={handleLinkedSelector}>
          {formatMessage({ id: 'linked_account_property' })}
        </span>
        <span className="delete_filter" onClick={handleDeleteFilter}>
          {formatMessage({ id: 'delete_filter' })}
        </span>
      </Grid>

      {filterType === 'checkbox' && (
        <Grid item className={classes.tabSearchWrapper}>
          <SimpleSearch
            value={search}
            onChange={e => {
              updateSearch(e.target.value);
            }}
          />
        </Grid>
      )}
      {activeTab === id && children}
    </div>
  );
};
