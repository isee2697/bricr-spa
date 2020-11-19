import React from 'react';
import { useParams } from 'react-router-dom';

import { SortOption } from 'ui/molecules/list/List.types';
import { useLocale, useModalDispatch } from 'hooks';
import { Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';

import { OrdersProps, OrdersTabStatus } from './Orders.types';
import { useStyles } from './Orders.styles';
import { OrderItem } from './orderItem/OrderItem';

export const Orders = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  sortType,
  onChangeStatus,
  onChangeSortType,
  orders,
}: OrdersProps) => {
  const classes = useStyles();
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

  const tabs: ActionTab[] = [
    {
      value: OrdersTabStatus.ActionRequired,
      amount: 1,
      hasBadge: true,
      badgeColor: 'error',
      label: formatMessage({ id: 'common.status.action_required' }),
    },
    {
      value: OrdersTabStatus.Active,
      amount: 44,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.active' }),
    },
    {
      value: OrdersTabStatus.Complete,
      amount: 77,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.complete' }),
    },
    {
      value: OrdersTabStatus.Withdrawn,
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
            onClick={() => open('add-sales-order')}
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
                <IconButton size="small" variant="roundedContained">
                  <ManageIcon />
                </IconButton>
              }
            />
            <CardContent>
              <ActionTabs onStatusChange={onChangeStatus} status={status} tabs={tabs} />
              <List
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'sales.orders.empty_title' })}
                emptyDescription={formatMessage({ id: 'sales.orders.empty_description' })}
                sortOptions={sortOptions}
                items={orders}
                itemIndex={'id'}
                renderItem={(order, checked, checkbox) => (
                  <OrderItem status={status} order={order} checked={checked} checkbox={checkbox} />
                )}
                onSort={key => onChangeSortType(key)}
              />
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
