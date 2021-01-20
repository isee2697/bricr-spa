import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { useEntityType } from 'app/shared/entityType';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { SalesHeader } from '../salesHeader/SalesHeader';
import {
  AddIcon,
  HamburgerIcon,
  ListIcon,
  LocationIcon,
  ManageIcon,
  MenuIcon,
  SearchIcon,
  SettingsIcon,
} from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTabs } from 'ui/molecules';
import { InvoicesStatus } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';
import { SalesItemType, SalesOrderType } from 'app/shared/addSalesItemModal/AddSalesItemModal.types';

import { InvoicesProps } from './Invoices.types';
import { useStyles } from './Invoices.styles';
import { ListView } from './listView/ListView';
import { TableView } from './tableView/TableView';

export const Invoices = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onChangeStatus,
  invoices,
  viewMode,
  onViewModeChange,
}: InvoicesProps) => {
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
              {viewMode === 'list' && <ListView items={invoices} />}
              {viewMode === 'table' && <TableView items={invoices} />}
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
