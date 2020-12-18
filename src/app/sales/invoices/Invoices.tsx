import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { AddIcon, ManageIcon, MenuIcon, SearchIcon, SettingsIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';
import { SortOption } from 'ui/molecules/list/List.types';
import { InvoicesStatus } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';
import { SalesItemType, SalesOrderType } from 'app/shared/addSalesItemModal/AddSalesItemModal.types';

import { InvoicesProps } from './Invoices.types';
import { useStyles } from './Invoices.styles';
import { InvoiceItem } from './invoiceItem/InvoiceItem';

export const Invoices = ({ onSidebarOpen, isSidebarVisible, status, onChangeStatus, invoices }: InvoicesProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();
  const { open } = useModalDispatch();

  const tabs: ActionTab[] = [
    {
      value: InvoicesStatus.Drafts,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Drafts}` }),
    },
    {
      value: InvoicesStatus.Sent,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Sent}` }),
    },
    {
      value: InvoicesStatus.Approved,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Approved}` }),
    },
    {
      value: InvoicesStatus.Rejected,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Rejected}` }),
    },
    {
      value: InvoicesStatus.Overdue,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Overdue}` }),
    },
    {
      value: InvoicesStatus.Paid,
      amount: 1,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: `sales.invoices.status.${InvoicesStatus.Paid}` }),
    },
  ];

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'lastEdited',
    },
  ];

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/invoices"
        title={formatMessage({ id: 'sales.invoices.title' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded">
              <MenuIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton size="small" variant="rounded">
              <SettingsIcon />
            </IconButton>
            <Box ml={2} />
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                open('add-sales-item', {
                  salesItemType: SalesItemType.Invoice,
                  salesItemOrderType: SalesOrderType.HouseForSale,
                })
              }
              startIcon={<AddIcon color="inherit" />}
              size="small"
            >
              {formatMessage({ id: 'sales.invoices.add' })}
            </Button>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales.invoices.title' })}
              action={
                <Box display="flex" alignItems="center">
                  <IconButton size="small" variant="roundedContained">
                    <SearchIcon />
                  </IconButton>
                  <Box ml={2} />
                  <IconButton size="small" variant="roundedContained">
                    <ManageIcon />
                  </IconButton>
                </Box>
              }
            />
            <CardContent>
              <ActionTabs onStatusChange={onChangeStatus} status={status} tabs={tabs} />
              <List
                items={invoices}
                itemIndex={'id'}
                renderItem={(invoice, checked, checkbox) => (
                  <InvoiceItem checked={checked} checkbox={checkbox} item={invoice} />
                )}
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'sales.invoices.list.empty_title' })}
                emptyDescription={formatMessage({ id: 'sales.invoices.empty_description' })}
                sortOptions={sortOptions}
              />
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
