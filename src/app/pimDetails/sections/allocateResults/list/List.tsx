import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Page } from 'ui/templates';
import { Box, Card, CardContent, CardHeader, IconButton, Tab, Tabs, Typography } from 'ui/atoms';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks';
import { ManageIcon } from 'ui/atoms/icons';
import { AllocateResultsRelationRanking } from '../../allocateResultsDetails/AllocateResultsDetails.types';
import { SortOption } from 'ui/molecules/list/List.types';

import { ListItem } from './listItem/ListItem';
import { useStyles } from './List.styles';
import { AllocateResultItem, AllocateResultSortOrder } from './List.types';

export const AllocateResultsList = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const tabs = [
    {
      key: 'ResultList',
    },
  ];
  const [status, setStatus] = useState(tabs[0]);

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
      },
    ]);
  };

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <Page withoutHeader>
      <Card onClick={() => handleAllocateResultsUpdate()}>
        {allocateResults.length > 0 && (
          <>
            <CardHeader
              title={formatMessage({ id: 'project.details.allocate_results.title' })}
              action={
                <IconButton variant="roundedContained" onClick={() => {}} size="small">
                  <ManageIcon />
                </IconButton>
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
