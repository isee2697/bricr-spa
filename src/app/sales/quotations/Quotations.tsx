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
import { SalesOrderType } from '../../shared/addSalesItemModal/AddSalesItemModal.types';
import { SalesLabel } from 'api/types';

import { QuotationsProps, QuotationsTabStatus } from './Quotations.types';
import { useStyles } from './Quotations.styles';
import { ListView } from './listView/ListView';
import { TableView } from './tableView/TableView';

export const Quotations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  sortType,
  viewMode,
  onViewModeChange,
  onChangeStatus,
  onChangeSortType,
  quotations,
}: QuotationsProps) => {
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const tabs: ActionTab[] = [
    {
      value: QuotationsTabStatus.Active,
      amount: 23,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.active' }),
    },
    {
      value: QuotationsTabStatus.Accepted,
      amount: 11,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.accepted' }),
    },
    {
      value: QuotationsTabStatus.Declined,
      amount: 3,
      hasBadge: true,
      badgeClass: classes.grayBadge,
      label: formatMessage({ id: 'common.status.declined' }),
    },
  ];

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/leads"
        title={formatMessage({ id: 'sales.quotations.title' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              open('add-sales-item', {
                salesLabel: SalesLabel.Quotation,
                salesItemOrderType: SalesOrderType.HouseForSale,
              })
            }
            startIcon={<AddIcon color="inherit" />}
            size="small"
          >
            {formatMessage({ id: 'sales.quotations.add' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales.quotations.title' })}
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
                <ListView status={status} items={quotations} onChangeSortType={onChangeSortType} sortType={sortType} />
              )}
              {viewMode === 'table' && <TableView items={quotations} />}
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
