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
import { SalesItemType, SalesOrderType } from '../../shared/addSalesItemModal/AddSalesItemModal.types';

import { QuotationsProps, QuotationsTabStatus } from './Quotations.types';
import { useStyles } from './Quotations.styles';
import { QuotationItem } from './quotationItem/QuotationItem';

export const Quotations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  sortType,
  onChangeStatus,
  onChangeSortType,
  quotations,
}: QuotationsProps) => {
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_option.last_edited' }),
      key: 'last_edited',
    },
  ];

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
                salesItemType: SalesItemType.Quotation,
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
                <IconButton size="small" variant="roundedContained">
                  <ManageIcon />
                </IconButton>
              }
            />
            <CardContent>
              <ActionTabs onStatusChange={onChangeStatus} status={status} tabs={tabs} />
              <List
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'sales.quotations.empty_title' })}
                emptyDescription={formatMessage({ id: 'sales.quotations.empty_description' })}
                sortOptions={sortOptions}
                items={quotations}
                itemIndex={'id'}
                renderItem={(quotation, checked, checkbox) => (
                  <QuotationItem status={status} quotation={quotation} checked={checked} checkbox={checkbox} />
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
