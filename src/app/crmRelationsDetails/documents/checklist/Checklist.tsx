import React, { useState } from 'react';
import clsx from 'classnames';
import { useHistory } from 'react-router-dom';

import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale, useModalDispatch } from 'hooks';
import { ActionTabs, InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { AddChecklistModal } from '../addChecklistModal/AddChecklistModal';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';

import { ChecklistProps, ChecklistStatus } from './Checklist.types';
import { useStyles } from './Checklist.styles';
import { ChecklistListItem } from './ChecklistListItem';

export const Checklist = ({
  path,
  onSidebarOpen,
  isSidebarVisible,
  lists = [],
  status,
  onStatusChange,
}: ChecklistProps) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { push } = useHistory();
  const classes = useStyles({});
  const [showChecklist, setToggleShowChecklist] = useState(false);

  const tabs: ActionTab[] = Object.keys(ChecklistStatus).map(key => ({
    value: key,
    amount: 1,
    label: `dictionaries.status.${key}`,
    hasBadge: true,
    badgeClass: clsx(classes.badge, key),
  }));

  return (
    <>
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={() => open('add-document-checklist')}
          >
            {formatMessage({ id: 'crm.details.documents.add_checklist' })}
          </Button>
        }
      />
      <Page title={formatMessage({ id: 'crm.details.documents.checklist.title' })} titleActions={<></>}>
        <Grid xs={12} item>
          <Card onClick={() => setToggleShowChecklist(!showChecklist)}>
            <CardHeader title={formatMessage({ id: 'crm.details.documents.checklist' })} />
            <CardContent>
              {(!showChecklist || lists.length === 0) && (
                <InfoSection emoji="📄">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.documents.checklist.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.documents.checklist.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {showChecklist && lists.length > 0 && (
                <>
                  <ActionTabs onStatusChange={onStatusChange} status={status} tabs={tabs} />
                  <List
                    items={lists.map((list, index) => ({
                      ...list,
                      listIndex: index,
                    }))}
                    itemIndex={'id'}
                    loadingItem={<PropertyItemPlaceholder />}
                    renderItem={(list, checked, checkbox) => (
                      <Box
                        key={list.id}
                        className={clsx(classes.row, { [classes.rowChecked]: checked }, 'checklist-row', list.status)}
                      >
                        <Box display="flex" flexDirection="column" justifyContent="space-between">
                          {checkbox}
                          <Typography variant="h4" className={classes.rowItemIndex}>
                            {list.listIndex}
                          </Typography>
                        </Box>
                        <Box component="span" className={classes.rowItem}>
                          <Box className={classes.itemButton} onClick={() => push(`${path}/${list.id}`)}>
                            <ChecklistListItem {...list} />
                          </Box>
                        </Box>
                      </Box>
                    )}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Page>
      <AddChecklistModal />
    </>
  );
};
