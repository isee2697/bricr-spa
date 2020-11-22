import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { CrmRelationsDetailsHeader } from '../../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { ActionTabs, List, PropertyItemPlaceholder } from 'ui/molecules';
import { SalesAcquisition } from '../../../sales/salesAcquisition/SalesAcquisition.types';
import { SALES_ACQUISITION } from 'api/mocks/sales';
import { SortOption } from 'ui/molecules/list/List.types';

import { AcquisitionsProps } from './Acquisitions.types';
import { ListItem } from './listItem/ListItem';

export const Acquisitions = ({ isSidebarVisible, onSidebarOpen }: AcquisitionsProps) => {
  const { formatMessage } = useLocale();
  const [status, setStatus] = useState<'active' | 'withdrawn'>('active');

  const tabs: ActionTab[] = [
    {
      value: 'active',
      label: formatMessage({ id: 'common.status.active' }),
      amount: 3,
    },
    {
      value: 'withdrawn',
      label: formatMessage({ id: 'common.status.withdrawn' }),
      amount: 0,
    },
  ];

  const acquisitions: SalesAcquisition[] = SALES_ACQUISITION;

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'common.sort_options.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'crm.details.sales.acquisitions.title' })} />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button color="primary" variant="contained" startIcon={<AddIcon color="inherit" />}>
            {formatMessage({ id: 'crm.details.sales.acquisitions.add_acquisition' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item container>
          <Box mt={1} width="100%">
            <Card>
              <CardHeader
                title={formatMessage({ id: 'crm.details.sales.acquisitions.title' })}
                action={
                  <IconButton variant="roundedContained" size="small">
                    <ManageIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <ActionTabs onStatusChange={setStatus} tabs={tabs} status={status} />
                <List
                  items={acquisitions}
                  itemIndex={'id'}
                  renderItem={(acquisition, checked, checkbox) => (
                    <ListItem checked={checked} checkbox={checkbox} item={acquisition} status={status} />
                  )}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'crm.details.sales.acquisitions.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'crm.details.sales.acquisitions.empty_description' })}
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
