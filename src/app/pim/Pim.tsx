import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { Pim as PimEntity } from 'api/types';
import { Box, Grid, Card, CardHeader, CardContent, Alert } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppRoute } from 'routing/AppRoute.enum';

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
  isLoading,
  isError,
  amounts,
  listData,
  sorting,
  pagination,
}: PimProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <>
      {!!isError && <Alert severity="error">{formatMessage({ id: 'common.error' })}</Alert>}
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <PimSidebarMenu type={type} onTypeChange={onTypeChange} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <PimHeader type={type} />
            <Grid item xs={12}>
              <Card>
                <CardHeader className="pim-list-header" title={formatMessage({ id: `pim.type.${type}` })} />
                <CardContent className={classes.listContent}>
                  <Box mx={2}>
                    <PimActionTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
                  </Box>
                  <List
                    className="pim-list"
                    items={(listData?.listPims?.items ?? []) as PimEntity[]}
                    itemIndex={'id'}
                    renderItem={(pim, checked, checkbox) => (
                      <Box
                        key={pim.id}
                        className={classNames(classes.row, { [classes.rowChecked]: checked }, 'pim-row')}
                      >
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
                    onBulk={() => alert('Bulk clicked')}
                    onArchive={() => alert('Archive clicked')}
                    onDelete={() => alert('Delete clicked')}
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
    </>
  );
};
