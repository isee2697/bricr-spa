import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { CrmRelationsDetailsHeader } from '../../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { SalesOrder } from '../../../sales/orders/Orders.types';
import { SALES_ORDERS } from 'api/mocks/sales';
import { SortOption } from 'ui/molecules/list/List.types';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';

import { OrdersProps } from './Orders.types';
import { ListItem } from './listItem/ListItem';

export const Orders = ({ isSidebarVisible, onSidebarOpen }: OrdersProps) => {
  const { formatMessage } = useLocale();
  const [status, setStatus] = useState<'actionRequired' | 'active' | 'completed' | 'withdrawn'>('actionRequired');

  const tabs: ActionTab[] = [
    {
      value: 'actionRequired',
      label: formatMessage({ id: 'common.status.actionRequired' }),
      amount: 3,
    },
    {
      value: 'active',
      label: formatMessage({ id: 'common.status.active' }),
      amount: 1,
    },
    {
      value: 'completed',
      label: formatMessage({ id: 'common.status.completed' }),
      amount: 1,
    },
    {
      value: 'withdrawn',
      label: formatMessage({ id: 'common.status.withdrawn' }),
      amount: 0,
    },
  ];

  const orders: SalesOrder[] = SALES_ORDERS;

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.details.sales.orders.title' })} />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />}>
            {formatMessage({ id: 'crm.details.sales.orders.add_order' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item container>
          <Box mt={1} width="100%">
            <Card>
              <CardHeader
                title={formatMessage({ id: 'crm.details.sales.orders.title' })}
                action={
                  <IconButton variant="roundedContained" size="small">
                    <ManageIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <ActionTabs onStatusChange={setStatus} tabs={tabs} status={status} />
                <List
                  items={orders}
                  itemIndex={'id'}
                  renderItem={(order, checked, checkbox) => (
                    <ListItem item={order} checked={checked} checkbox={checkbox} status={status} />
                  )}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'crm.details.sales.orders.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'crm.details.sales.orders.empty_description' })}
                  sortOptions={sortOptions}
                />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Page>
    </>
  );
};
