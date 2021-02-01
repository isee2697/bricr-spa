import React from 'react';

import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from 'ui/atoms';
import { useLayout } from 'context/layout';
import { Page } from 'ui/templates';
import { CardsIcon, ExitIcon, HideIcon, ListIcon, LocationIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { ActionTabs } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ListPimsFilters } from 'api/types';

import { SidebarMenu as NvmSearchSidebarMenu } from './nvmSearchSidebarMenu/SidebarMenu';
import { useStyles } from './PimNvm.styles';
import { PimNvmProps, PimNvmTab } from './PimNvm.types';
import { NvmSearchContainer } from './nvmSearch/NvmSearchContainer';
import { DailyMutationsSidebarMenu } from './dailyMutationsSidebarMenu/SidebarMenu';

export const PimNvm = ({ tab, onChangeTab, onFilter, activeFilters }: PimNvmProps) => {
  const { isSidebarMenuVisible, setSidebarMenuVisible } = useLayout();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const tabs: ActionTab[] = Object.keys(PimNvmTab).map(key => ({
    label: formatMessage({ id: `nvm.tab.${key}` }),
    value: key,
    hasBadge: true,
    amount: 2,
  }));

  return (
    <Grid container>
      {tab === PimNvmTab.NvmSearch ? (
        <NvmSearchSidebarMenu
          isVisible={isSidebarMenuVisible}
          onHide={() => setSidebarMenuVisible(!isSidebarMenuVisible)}
        />
      ) : (
        <DailyMutationsSidebarMenu
          isVisible={isSidebarMenuVisible}
          onHide={() => setSidebarMenuVisible(!isSidebarMenuVisible)}
        />
      )}

      <Grid
        item
        xs={isSidebarMenuVisible ? false : 12}
        sm={isSidebarMenuVisible ? 8 : 12}
        md={isSidebarMenuVisible ? 9 : 12}
        lg={isSidebarMenuVisible ? 10 : 12}
        className={classes.content}
      >
        <Page withoutHeader>
          <Box width="100%" display="flex" justifyContent="space-between">
            <Box display="flex">
              {!isSidebarMenuVisible && (
                <IconButton
                  className={classes.hideSidebarButton}
                  onClick={() => setSidebarMenuVisible(!isSidebarMenuVisible)}
                  size="small"
                  variant="roundedContained"
                >
                  <HideIcon />
                </IconButton>
              )}
              <Typography variant="h1">{formatMessage({ id: 'nvm.title' })}</Typography>
            </Box>
            <IconButton size="small" variant="rounded">
              <ExitIcon />
            </IconButton>
          </Box>
          <Card>
            <CardHeader
              action={
                <Box display="flex">
                  <IconButton size="small" variant="rounded">
                    <ListIcon />
                  </IconButton>
                  <Box ml={3} />
                  <IconButton size="small" variant="rounded">
                    <CardsIcon />
                  </IconButton>
                  <Box ml={3} />
                  <IconButton size="small" variant="rounded">
                    <LocationIcon />
                  </IconButton>
                  <Box ml={3} />
                  <FiltersButton color="primary" data={activeFilters} getActiveFilters={onFilter} />
                </Box>
              }
            />
            <CardContent>
              <ActionTabs tabs={tabs} status={tab} onStatusChange={onChangeTab} />
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
              <NvmSearchContainer />
            </CardContent>
          </Card>
        </Page>
      </Grid>
    </Grid>
  );
};
