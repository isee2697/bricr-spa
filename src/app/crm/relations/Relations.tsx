import React from 'react';
import clsx from 'classnames';

import { CrmStatus, CrmType } from 'api/types';
import { Page } from 'ui/templates';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Grid, Card, CardHeader, CardContent, Box } from 'ui/atoms';
import { CrmHeader } from '../crmHeader/CrmHeader';
import { CrmActionTabs } from '../crmActionTabs/CrmActionTabs';
import { useLocale } from 'hooks';
import { CrmSubHeader } from '../crmSubHeader/CrmSubHeader';
import { CrmItem } from '../Crm.types';
import { CrmListItem } from '../crmListItem/CrmListItem';
import { SortOption } from 'ui/molecules/list/List.types';

import { RelationsProps } from './Relations.types';
import { useStyles } from './Relations.styles';

export const Relations = ({
  onSidebarOpen,
  isSidebarVisible,
  status,
  onStatusChange,
  crms,
  onUpdateItemStatus,
  onDeleteItem,
}: RelationsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <CrmHeader type={CrmType.Relation} onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={formatMessage({ id: `crm.type.relations` })} action={<CrmSubHeader />} />
            <CardContent>
              <Box mx={2}>
                <CrmActionTabs
                  status={status}
                  onStatusChange={onStatusChange}
                  amounts={{
                    actionRequired: crms.filter(crmItem => crmItem.status === CrmStatus.ActionRequired).length,
                    active: crms.filter(crmItem => crmItem.status === CrmStatus.Active).length,
                    inactive: crms.filter(crmItem => crmItem.status === CrmStatus.Inactive).length,
                  }}
                />
              </Box>
              <List
                className="crm-list"
                items={crmItemsFiltered as CrmItem[]}
                itemIndex={'id'}
                loadingItem={<PropertyItemPlaceholder />}
                emptyTitle={formatMessage({ id: 'crm.list.empty_title' })}
                emptyDescription={formatMessage(
                  { id: 'crm.list.empty_description' },
                  { buttonName: formatMessage({ id: `crm.add.relations` }) },
                )}
                renderItem={(crm, checked, checkbox) => (
                  <Box key={crm.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row')}>
                    {checkbox}
                    <Box component="span" className={classes.rowItem}>
                      <CrmListItem crm={crm} onUpdateStatus={onUpdateItemStatus} onDelete={onDeleteItem} />
                    </Box>
                  </Box>
                )}
                sortOptions={sortOptions}
              />
            </CardContent>
          </Card>
        </Grid>
      </Page>
    </>
  );
};
