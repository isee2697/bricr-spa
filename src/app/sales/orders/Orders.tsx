import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { AddIcon, HamburgerIcon, ListIcon, LocationIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs } from 'ui/molecules';
import { SalesItemType } from 'app/shared/addSalesItemModal/AddSalesItemModal.types';
import { SalesStatus } from 'api/types';

import { OrdersProps } from './Orders.types';
import { useStyles } from './Orders.styles';
import { ListView } from './listView/ListView';
import { TableView } from './tableView/TableView';

export const Orders = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  sortType,
  onChangeStatus,
  onChangeSortType,
  orders,
  viewMode,
  onViewModeChange,
}: OrdersProps) => {
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const tabs: ActionTab[] = [
    {
      value: SalesStatus.ActionRequired,
      amount: 1,
      hasBadge: true,
      badgeColor: 'error',
      label: formatMessage({ id: 'common.status.action_required' }),
    },
    {
      value: SalesStatus.Active,
      amount: 44,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.active' }),
    },
    {
      value: SalesStatus.Complete,
      amount: 77,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.complete' }),
    },
    {
      value: SalesStatus.Inactive,
      amount: 12,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.withdrawn' }),
    },
  ];

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/leads"
        title={formatMessage({ id: 'sales.orders.title' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            color="primary"
            variant="contained"
            onClick={() => open('add-sales-item', { salesItemType: SalesItemType.Order })}
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'sales.order.add' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales.orders.title' })}
              action={
                <Box display="flex">
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" onClick={() => onViewModeChange('list')}>
                      <ListIcon color={viewMode === 'list' ? 'primary' : 'inherit'} />
                    </IconButton>
                  </Box>
                  <Box mr={2}>
                    <IconButton variant="rounded" size="small" onClick={() => onViewModeChange('table')}>
                      <HamburgerIcon color={viewMode === 'table' ? 'primary' : 'inherit'} />
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
              <ActionTabs onStatusChange={onChangeStatus} status={status} tabs={tabs} />
              {viewMode === 'list' && (
                <ListView items={orders} status={status} sortType={sortType} onChangeSortType={onChangeSortType} />
              )}
              {viewMode === 'table' && <TableView items={orders} />}
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
