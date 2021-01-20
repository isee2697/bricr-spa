import React from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

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
import { AppRoute } from 'routing/AppRoute.enum';
import { SortOption } from 'ui/molecules/list/List.types';

import { BusinessesProps } from './Businesses.types';
import { useStyles } from './Businesses.styles';

export const Businesses = ({ onSidebarOpen, isSidebarVisible, status, onStatusChange, crms }: BusinessesProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { push } = useHistory();

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <CrmHeader type={CrmType.Business} onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={formatMessage({ id: `crm.type.businesses` })} action={<CrmSubHeader />} />
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
                  { buttonName: formatMessage({ id: `crm.add.businesses` }) },
                )}
                renderItem={(crm, checked, checkbox) => (
                  <Box
                    key={crm.id}
                    className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row', crm.status)}
                  >
                    {checkbox}
                    <Box component="span" className={classes.rowItem}>
                      <Box
                        className={classes.itemButton}
                        onClick={() => push(AppRoute.crmBusinessesDetails.replace(':id', crm.id))}
                      >
                        <CrmListItem crm={crm} />
                      </Box>
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
