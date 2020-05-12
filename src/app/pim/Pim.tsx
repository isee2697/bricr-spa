import React from 'react';

import { Pim as PimEntity } from 'api/types';
import { Grid, Card, CardHeader, CardContent, Alert } from 'ui/atoms';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { PimSidebarMenu } from './pimSidebarMenu/PimSidebarMenu';
import { PimHeader } from './pimHeader/PimHeader';
import { PimTabs } from './pimTabs/PimTabs';
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

  return (
    <>
      {!!isError && <Alert severity="error">{formatMessage({ id: AppMessages['common.error'] })}</Alert>}
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <PimSidebarMenu type={type} onTypeChange={onTypeChange} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <PimHeader />
            <Grid item xs={12}>
              <Card>
                <CardHeader title={formatMessage({ id: `pim.type.${type}` })} />
                <CardContent>
                  <PimTabs status={status} onStatusChange={onStatusChange} amounts={amounts} />
                  <List
                    items={(listData?.listPims.items ?? []) as PimEntity[]}
                    itemIndex={'id'}
                    renderItem={pim => <PimItem {...pim} />}
                    onBulk={() => alert('Bulk clicked')}
                    sortOptions={sorting.sortOptions}
                    onSort={sorting.onSort}
                    pagination={pagination}
                    loading={isLoading}
                    loadingItem={<PropertyItemPlaceholder />}
                    emptyTitle={formatMessage({ id: AppMessages['pim.list.empty_title'] })}
                    emptyDescription={formatMessage({ id: AppMessages['pim.list.empty_description'] })}
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
