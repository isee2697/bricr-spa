import React, { useCallback, useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { Grid, Box, Card, CardHeader, CardContent } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { List, PropertyItemPlaceholder } from 'ui/molecules';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { SortOption } from 'ui/molecules/list/List.types';
import { useModalDispatch, useModalState } from 'hooks';

import { CrmItem, CrmProps } from './Crm.types';
import { useStyles } from './Crm.style';
import { CrmHeader } from './crmHeader/CrmHeader';
import { CrmSidebarMenu } from './crmSidebarMenu/CrmSidebarMenu';
import { CrmActionTabs } from './crmActionTabs/CrmActionTabs';
import { CrmSubHeader } from './crmSubHeader/CrmSubHeader';
import { CrmListItem } from './crmListItem/CrmListItem';
import { AddRelationModal } from './addRelationModal/AddRelationModal';

export const Crm = ({ crms, type, onTypeChange, status, onStatusChange }: CrmProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const { push } = useHistory();
  const { close } = useModalDispatch();
  const { isOpen: isModalOpened } = useModalState('add-relation');

  const handleSidebarHide = useCallback(() => {
    setSidebarVisibility(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisibility(true);
  }, []);

  const crmItemsFiltered = crms.filter(crmItem => crmItem.status === status);

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <Grid container spacing={0}>
        <CrmSidebarMenu
          type={type}
          onTypeChange={onTypeChange}
          onHide={handleSidebarHide}
          isVisible={isSidebarVisible}
        />
        <Box flex={1}>
          <Grid container spacing={3} className={classes.content}>
            <CrmHeader type={type} onSidebarOpen={handleSidebarOpen} isSidebarVisible={isSidebarVisible} />
            <Page withoutHeader>
              <Grid item xs={12}>
                <Card>
                  <CardHeader title={formatMessage({ id: `crm.type.${type}` })} action={<CrmSubHeader />} />
                  <CardContent>
                    <Box mx={2}>
                      <CrmActionTabs
                        status={status}
                        onStatusChange={onStatusChange}
                        amounts={{
                          actionRequired: 3,
                          active: 287,
                          inactive: 239,
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
                        { buttonName: formatMessage({ id: `crm.add.${type}` }) },
                      )}
                      renderItem={(crm, checked, checkbox) => (
                        <Box key={crm.id} className={clsx(classes.row, { [classes.rowChecked]: checked }, 'crm-row')}>
                          {checkbox}
                          <Box component="span" className={classes.rowItem}>
                            <Box
                              className={classes.itemButton}
                              onClick={() => push(AppRoute.crmRelationsDetails.replace(':id', crm.id))}
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
          </Grid>
        </Box>
      </Grid>
      <AddRelationModal
        isOpened={isModalOpened}
        onClose={() => close('add-relation')}
        onCreateNewRelation={() => {}}
        onRequestBricrData={() => {}}
      />
    </>
  );
};
