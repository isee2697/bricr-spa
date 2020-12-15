import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { CrmRelationsDetailsHeader } from '../../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';
import { SALES_QUOTATIONS } from 'api/mocks/sales';
import { SortOption } from 'ui/molecules/list/List.types';
import { SalesQuotation } from '../../../sales/quotations/Quotations.types';

import { QuotationsProps } from './Quotations.types';
import { ListItem } from './listItem/ListItem';

export const Quotations = ({ isSidebarVisible, onSidebarOpen }: QuotationsProps) => {
  const { formatMessage } = useLocale();
  const [status, setStatus] = useState<'active' | 'accepted' | 'declined'>('active');

  const tabs: ActionTab[] = [
    {
      value: 'active',
      label: formatMessage({ id: 'common.status.active' }),
      amount: 3,
    },
    {
      value: 'accepted',
      label: formatMessage({ id: 'common.status.accepted' }),
      amount: 3,
    },
    {
      value: 'declined',
      label: formatMessage({ id: 'common.status.declined' }),
      amount: 0,
    },
  ];

  const quotations: SalesQuotation[] = SALES_QUOTATIONS;

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.details.sales.quotations.title' })} />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />}>
            {formatMessage({ id: 'crm.details.sales.quotations.add_acquisition' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item container>
          <Box mt={1} width="100%">
            <Card>
              <CardHeader
                title={formatMessage({ id: 'crm.details.sales.quotations.title' })}
                action={
                  <IconButton variant="roundedContained" size="small">
                    <ManageIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <ActionTabs onStatusChange={setStatus} tabs={tabs} status={status} />
                <List
                  items={quotations}
                  itemIndex={'id'}
                  renderItem={(quotation, checked, checkbox) => (
                    <ListItem checked={checked} checkbox={checkbox} item={quotation} status={status} />
                  )}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'crm.details.sales.quotations.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'crm.details.sales.quotations.empty_description' })}
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
