import React from 'react';
import { useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { useLocale, useModalDispatch } from 'hooks';
import { Box, Button, Card, CardContent, CardHeader, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AddIcon, HamburgerIcon, ListIcon, LocationIcon, ManageIcon, SearchIcon, SettingsIcon } from 'ui/atoms/icons';
import { SalesHeader } from '../salesHeader/SalesHeader';
import { Page } from 'ui/templates';
import { SalesLabel } from 'api/types';

import { SalesAcquisitionProps } from './SalesAcquisition.types';
import { SalesAcquisitionTabs } from './tabs/Tabs';
import { ListView } from './listView/ListView';
import { TableView } from './tableView/TableView';

export const SalesAcquisition = (props: SalesAcquisitionProps) => {
  const {
    onSidebarOpen,
    isSidebarVisible,
    onStatusChange,
    status,
    viewMode,
    onViewModeChange,
    salesAcquisitions,
  } = props;
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  return (
    <>
      <NavBreadcrumb
        urlBase={joinUrlParams(baseUrl, urlParams)}
        to="/acquisition"
        title={formatMessage({ id: 'sales.acquisition.title' })}
      />
      <SalesHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded">
              <SettingsIcon />
            </IconButton>
            <Box ml={1} />
            <Button
              color="primary"
              variant="contained"
              onClick={() => open('add-sales-item', { salesLabel: SalesLabel.Acquisition })}
              startIcon={<AddIcon color="inherit" />}
              size="small"
            >
              {formatMessage({ id: 'sales.acquisition.add' })}
            </Button>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Card>
            <CardHeader
              title={formatMessage({ id: 'sales.acquisition.title' })}
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
              <SalesAcquisitionTabs
                status={status}
                onStatusChange={onStatusChange}
                amounts={{
                  actionRequired: 1,
                  active: 44,
                  withdrawn: 12,
                }}
              />
              {viewMode === 'list' && <ListView status={status} items={salesAcquisitions} />}
              {viewMode === 'table' && <TableView items={salesAcquisitions} />}
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
