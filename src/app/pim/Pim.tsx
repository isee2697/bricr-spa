import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { ListPimsFilters, Pim as PimEntity } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, Alert } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { useShowError, useSnackbar } from 'hooks';

import { PimSidebarMenu } from './pimSidebarMenu/PimSidebarMenu';
import { PimHeader } from './pimHeader/PimHeader';
import { PimActionTabs } from './pimActionTabs/PimActionTabs';
import { PimItem } from './pimItem/PimItem';
import { PimProps } from './Pim.types';
import { useStyles } from './Pim.styles';

export const Pim = ({
  status,
  onStatusChange,
  type,
  onTypeChange,
  pricingType,
  onPricingTypeChange,
  isLoading,
  amounts,
  listData,
  sorting,
  pagination,
  onFilter,
  activeFilters,
}: PimProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={3} lg={2}>
        <PimSidebarMenu
          type={type}
          onTypeChange={onTypeChange}
          pricingType={pricingType}
          onPricingTypeChange={onPricingTypeChange}
        />
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        <Grid container spacing={3} className={classes.content}>
          <PimHeader type={type} />
          <Grid item xs={12}>
            <Card>
              <CardHeader
                className="pim-list-header"
                title={formatMessage({ id: `pim.type.${type}` })}
                action={
                  <Box display="flex">
                    <Box mr={3}>
                      <FiltersButton data={activeFilters} getActiveFilters={onFilter} />
                    </Box>
                  </Box>
                }
              />
              <CardContent className={classes.listContent}>
                <Box mx={2}>
                  <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
                </Box>
                <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
                <List
                  className="pim-list"
                  items={(listData?.listPims?.items ?? []) as PimEntity[]}
                  itemIndex={'id'}
                  renderItem={(pim, checked, checkbox) => (
                    <Box key={pim.id} className={classNames(classes.row, { [classes.rowChecked]: checked }, 'pim-row')}>
                      {checkbox}
                      <Box component="span" className={classes.rowItem}>
                        <Box
                          className={classes.itemButton}
                          onClick={() => push(AppRoute.pimDetails.replace(':id', pim.id))}
                        >
                          <PimItem {...pim} />
                        </Box>
                      </Box>
                    </Box>
                  )}
                  sortOptions={sorting.sortOptions}
                  onSort={sorting.onSort}
                  pagination={pagination}
                  loading={isLoading}
                  loadingItem={<PropertyItemPlaceholder />}
                  emptyTitle={formatMessage({ id: 'pim.list.empty_title' })}
                  emptyDescription={formatMessage({ id: 'pim.list.empty_description' })}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
