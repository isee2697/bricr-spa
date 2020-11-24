import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { CrmRelationsDetailsHeader } from '../../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, ManageIcon, SearchIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';
import { SALES_INVOICES } from 'api/mocks/sales';
import { SortOption } from 'ui/molecules/list/List.types';

import { InvoicesProps, SalesInvoice } from './Invoices.types';
import { ListItem } from './listItem/ListItem';

export const Invoices = ({ isSidebarVisible, onSidebarOpen }: InvoicesProps) => {
  const { formatMessage } = useLocale();
  const [status, setStatus] = useState<'drafts' | 'sent' | 'approved' | 'rejected' | 'overdue' | 'paid'>('drafts');

  const tabs: ActionTab[] = [
    {
      value: 'drafts',
      label: formatMessage({ id: 'common.status.drafts' }),
      amount: 3,
    },
    {
      value: 'sent',
      label: formatMessage({ id: 'common.status.sent' }),
      amount: 3,
    },
    {
      value: 'approved',
      label: formatMessage({ id: 'common.status.approved' }),
      amount: 3,
    },
    {
      value: 'rejected',
      label: formatMessage({ id: 'common.status.rejected' }),
      amount: 3,
    },
    {
      value: 'overdue',
      label: formatMessage({ id: 'common.status.overdue' }),
      amount: 3,
    },
    {
      value: 'paid',
      label: formatMessage({ id: 'common.status.paid' }),
      amount: 3,
    },
  ];

  const invoices: SalesInvoice[] = SALES_INVOICES;

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.last_edited' }),
      key: 'lastEdited',
    },
  ];

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.details.sales.invoices.title' })} />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />}>
            {formatMessage({ id: 'crm.details.sales.invoices.add_invoice' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item container>
          <Box mt={1} width="100%">
            <Card>
              <CardHeader
                title={formatMessage({ id: 'crm.details.sales.invoices.title' })}
                action={
                  <Box display="flex" alignItems="center">
                    <IconButton variant="roundedContained" size="small">
                      <SearchIcon />
                    </IconButton>
                    <Box ml={1.5} />
                    <IconButton variant="roundedContained" size="small">
                      <ManageIcon />
                    </IconButton>
                  </Box>
                }
              />
              <CardContent>
                <ActionTabs onStatusChange={setStatus} tabs={tabs} status={status} />
                <List
                  items={invoices}
                  itemIndex={'id'}
                  renderItem={(invoice, checked, checkbox) => (
                    <ListItem checked={checked} checkbox={checkbox} item={invoice} />
                  )}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'crm.details.sales.invoices.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'crm.details.sales.invoices.empty_description' })}
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
