import React from 'react';

import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from 'ui/atoms';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { useStyles } from './List.styles';
import { OrdersListProps, OrdersListTab } from './List.types';
import { SaleItem } from './saleItem/SaleItem';
import { AppraisalItem } from './appraisalItem/AppraisalItem';

export const OrdersList = ({ status, onStatusChange, data }: OrdersListProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = [
    {
      value: OrdersListTab.ActionRequired,
      amount: 1,
      hasBadge: true,
      badgeColor: 'error',
      label: formatMessage({ id: `crm.details.orders.tabs.${OrdersListTab.ActionRequired}` }),
    },
    {
      value: OrdersListTab.Active,
      amount: 2,
      label: formatMessage({ id: `crm.details.orders.tabs.${OrdersListTab.Active}` }),
    },
    {
      value: OrdersListTab.Archived,
      amount: 1,
      label: formatMessage({ id: `crm.details.orders.tabs.${OrdersListTab.Archived}` }),
    },
  ];

  return (
    <Page withoutHeader>
      <Grid xs={12} item>
        <Box display="flex" alignItems="center" mb={3}>
          <Box flexGrow={1} flexShrink={1}>
            <Typography variant="h1">{formatMessage({ id: 'crm.details.orders.title' })}</Typography>
          </Box>

          <Box mr={2}>
            <IconButton variant="rounded" size="small" onClick={() => {}}>
              <HelpIcon />
            </IconButton>
          </Box>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Box>
        <ActionTabs status={status} className="pim-tabs" onStatusChange={onStatusChange} tabs={tabs} />
        <Box mt={2}>
          <Card>
            <CardHeader title={formatMessage({ id: 'crm.details.orders.sale.title' })} />
            <CardContent className={classes.cardContent}>
              <SaleItem {...data.sale} />
            </CardContent>
          </Card>
        </Box>
        <Box mt={5}>
          <Card>
            <CardHeader title={formatMessage({ id: 'crm.details.orders.appraisal.title' })} />
            <CardContent className={classes.cardContent}>
              <AppraisalItem {...data.appraisal} />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Page>
  );
};
