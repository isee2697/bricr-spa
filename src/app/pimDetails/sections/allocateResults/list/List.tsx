import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Page } from 'ui/templates';
import { Box, Card, CardContent, CardHeader, Tab, Tabs, Typography } from 'ui/atoms';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { AllocateResultsRelationRanking } from '../../allocateResultsDetails/AllocateResultsDetails.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';

import { ListItem } from './listItem/ListItem';
import { useStyles } from './List.styles';
import { AllocateResultItem, AllocateResultSortOrder } from './List.types';
import { PimAllocateResultsListFilters } from './dictionaries';

export const AllocateResultsList = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const tabs = [
    {
      key: 'ResultList',
    },
  ];
  const [status, setStatus] = useState(tabs[0]);

  const [activeFilters, setActiveFilters] = useState<ListPimsFilters>({});
  const [allocateResults, setAllocateResults] = useState<AllocateResultItem[]>([]);

  const handleAllocateResultsUpdate = () => {
    setAllocateResults([
      {
        id: '0001',
        assignee: 'M. Janssen',
        date: DateTime.local(),
        name: 'Name for this allocation possibility',
        relations: [
          {
            id: '0001',
            ranking: AllocateResultsRelationRanking.Gold,
            allocated: true,
          },
        ],
        sortOrders: [AllocateResultSortOrder.CollectiveIncome, AllocateResultSortOrder.RegistrationDate],
        allocationBase: 'Base 10-01-2019',
        assigned: 8,
        unassigned: 30,
      },
    ]);
  };

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_option.newest' }),
      key: 'newest',
    },
  ];

  const handleFilterChange = (filters: ListPimsFilters) => {
    setActiveFilters(filters);
  };

  return (
    <Page withoutHeader>
      <Card onClick={() => handleAllocateResultsUpdate()}>
        {allocateResults.length > 0 && (
          <>
            <CardHeader
              title={formatMessage({ id: 'project.details.allocate_results.title' })}
              action={
                <FiltersButton
                  color="primary"
                  data={activeFilters}
                  getActiveFilters={handleFilterChange}
                  filters={PimAllocateResultsListFilters}
                />
              }
            />
            <CardContent className={classes.noPadding}>
              <Box>
                <Tabs
                  className={classes.tabs}
                  value={status.key}
                  onChange={(event, value) => setStatus(value)}
                  indicatorColor="primary"
                  textColor="inherit"
                >
                  <Tab
                    key={status.key}
                    value={status.key}
                    label={formatMessage({ id: `project.details.allocate_results.${status.key}` })}
                  />
                </Tabs>
                {Object.keys(activeFilters).length > 0 && (
                  <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={() => {}} />
                )}
                <List
                  items={allocateResults}
                  itemIndex={'id'}
                  loadingItem={<PropertyItemPlaceholder />}
                  isShowHeader
                  emptyTitle={formatMessage({ id: 'project.details.allocate_results.empty_title' })}
                  emptyDescription={formatMessage({ id: 'project.details.allocate_results.empty_description' })}
                  renderItem={(item, checked, checkbox) => (
                    <ListItem key={item.id} checked={checked} checkbox={checkbox} item={item} />
                  )}
                  sortOptions={sortOptions}
                  pagination={{
                    count: 8,
                    currentPerPage: 10,
                    perPageOptions: [10, 25, 'All'],
                    onPerPageChange: value => {
                      alert(value);
                    },
                  }}
                />
              </Box>
            </CardContent>
          </>
        )}
        {allocateResults.length === 0 && (
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'project.details.allocate_results.empty_description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        )}
      </Card>
    </Page>
  );
};
