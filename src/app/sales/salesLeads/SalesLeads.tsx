import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { useLocale, useModalDispatch } from 'hooks';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { AddIcon, CardsIcon, ListIcon, LocationIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { AddSalesLeadModalContainer } from '../addSalesLeadModal/AddSalesLeadModalContainer';

import { SalesLeadsProps } from './SalesLeads.types';
import { SalesLeadsTabs } from './tabs/Tabs';
import { SalesLeadItem } from './item/Item';

export const SalesLeads = (props: SalesLeadsProps) => {
  const { onSidebarOpen, isSidebarVisible, onStatusChange, status, viewMode, onViewModeChange, salesLeads } = props;
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/leads"
        title={formatMessage({ id: 'sales.leads.title' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            color="primary"
            variant="contained"
            onClick={() => open('add-sales-lead')}
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'sales.leads.add' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales.leads.title' })}
              action={
                <Box display="flex">
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" onClick={() => onViewModeChange('list')}>
                      <ListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
                    </IconButton>
                  </Box>
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" onClick={() => onViewModeChange('card')}>
                      <CardsIcon color={viewMode === 'card' ? 'primary' : 'inherit'} />
                    </IconButton>
                  </Box>
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small">
                      <LocationIcon />
                    </IconButton>
                  </Box>
                  <Box mr={2}>
                    <IconButton variant="roundedContained" size="small">
                      <ManageIcon />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton variant="roundedContained" size="small">
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </Box>
              }
            />
            <CardContent>
              <SalesLeadsTabs
                status={status}
                onStatusChange={onStatusChange}
                amounts={{ actionRequired: 2, withdrawn: 44 }}
              />
              <List
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'sales.leads.empty_title' })}
                emptyDescription={formatMessage({ id: 'sales.leads.empty_description' })}
                sortOptions={sortOptions}
                items={salesLeads}
                itemIndex={'id'}
                renderItem={(salesLead, checked, checkbox) => (
                  <SalesLeadItem
                    key={salesLead.id}
                    status={status}
                    salesLead={salesLead}
                    checked={checked}
                    checkbox={checkbox}
                  />
                )}
              />
            </CardContent>
          </Card>
        </Grid>
      </Page>
      <AddSalesLeadModalContainer />
    </>
  );
};
