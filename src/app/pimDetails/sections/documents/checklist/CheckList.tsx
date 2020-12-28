import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import {
  Box,
  Button,
  IconButton,
  Grid,
  Avatar,
  Typography,
  Placeholder,
  Card,
  CardContent,
  CardHeader,
} from 'ui/atoms';
import { AddIcon, SettingsIcon, BuildingIcon, ManageIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { useLocale } from 'hooks';
import { ActionTabs, InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { SortOption } from 'ui/molecules/list/List.types';
import { DocumentsCheckListDetailsContainer } from '../checklistDetails/CheckListDetailsContainer';

import { CheckListStatus, DocumentsCheckListProps } from './CheckList.types';
import { useStyles } from './CheckList.styles';
import { BrokerItem } from './brokerItem/BrokerItem';
import { OwnerItem } from './ownerItem/OwnerItem';

export const DocumentsCheckList = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  status,
  onStatusChange,
  checkListItems,
  onAddChecklist,
}: DocumentsCheckListProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState<string>();

  const tabs: ActionTab[] = Object.keys(CheckListStatus).map(key => ({
    label: formatMessage({ id: `dictionaries.checklist_status.${key}` }),
    amount: 1,
    hasBadge: true,
    value: key,
    badgeColor: 'error',
  }));

  const sortOptions: SortOption[] = [
    {
      name: formatMessage({ id: 'crm.list.sort_option.newest' }),
      key: 'newest',
    },
  ];

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded">
              <SettingsIcon />
            </IconButton>
            <Box ml={3} />
            <Button
              size="small"
              color="primary"
              variant="contained"
              startIcon={<AddIcon color="inherit" />}
              onClick={onAddChecklist}
            >
              {formatMessage({ id: 'pim_details.documents.checklist.copy_checklist' })}
            </Button>
          </Box>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar variant="rounded" bgcolor={theme.palette.red.light} className={classes.avatarIcon}>
              <Box color={theme.palette.red.main}>
                <BuildingIcon color="inherit" />
              </Box>
            </Avatar>
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
          <Card>
            {checkListItems.length === 0 && (
              <CardContent>
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.documents.checklist.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'pim_details.documents.checklist.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              </CardContent>
            )}
            {checkListItems.length > 0 && (
              <>
                <CardHeader
                  title={formatMessage({ id: 'pim_details.documents.checklist.title' })}
                  action={
                    <Box display="flex" alignItems="center">
                      <IconButton size="small" variant="circle" color="primary">
                        <AddIcon />
                      </IconButton>
                      <Box ml={2} />
                      <IconButton size="small" variant="roundedContained">
                        <ManageIcon />
                      </IconButton>
                    </Box>
                  }
                />
                <CardContent>
                  <ActionTabs tabs={tabs} status={status} onStatusChange={onStatusChange} />

                  <List
                    items={checkListItems}
                    itemIndex={'id'}
                    loadingItem={<PropertyItemPlaceholder />}
                    renderItem={(item, checked, checkbox) =>
                      status === CheckListStatus.CheckListBroker ? (
                        <BrokerItem
                          key={item.id}
                          item={item}
                          checkbox={checkbox}
                          checked={checked}
                          onClick={() => setSelectedItem(item.id)}
                        />
                      ) : (
                        <OwnerItem
                          key={item.id}
                          item={item}
                          checkbox={checkbox}
                          checked={checked}
                          onClick={() => setSelectedItem(item.id)}
                        />
                      )
                    }
                    sortOptions={sortOptions}
                  />
                </CardContent>
              </>
            )}
          </Card>
        </Grid>
      </Page>
      {selectedItem && (
        <DocumentsCheckListDetailsContainer id={selectedItem} onClose={() => setSelectedItem(undefined)} />
      )}
    </>
  );
};
