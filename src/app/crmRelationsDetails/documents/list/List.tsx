import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { SortOption } from 'ui/molecules/list/List.types';
import { Page } from 'ui/templates';
import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from 'ui/atoms';
import { AddIcon, HelpIcon, ManageIcon, MenuIcon, SearchIcon } from 'ui/atoms/icons';
import { ListActionTabs } from '../listActionTabs/ListActionTabs';
import { Document, DocumentRequestStatus, DocumentStatus } from '../Documents.types';
import { InfoSection, List, PropertyItemPlaceholder } from 'ui/molecules';
import { DocumentListItem } from '../listItem/ListItem';

import { useStyles } from './List.styles';

export const DocumentsList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [tabIndex, setTabIndex] = useState(0);
  const [documents, setDocuments] = useState<Document[]>([]);

  const sortOptions: SortOption[] = [
    { key: 'last_edited', name: formatMessage({ id: 'common.sort_option.last_edited' }) },
  ];

  const handleUpdateDocuments = () => {
    if (documents.length === 0) {
      setDocuments([
        {
          id: '0001',
          name: 'Wojciech’s Drivers Licence',
          image: 'http://placeimg.com/104/152/arch',
          dateCreated: DateTime.local(),
          stepsCompleted: [
            {
              status: DocumentRequestStatus.Request,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.UserNotified,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.Uploaded,
              date: DateTime.local(),
            },
          ],
        },
        {
          id: '0002',
          name: 'Wojciech’s Passport',
          image: 'http://placeimg.com/104/152/arch',
          dateCreated: DateTime.local(),
          stepsCompleted: [
            {
              status: DocumentRequestStatus.Request,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.RequestRejected,
              date: DateTime.local(),
            },
          ],
        },
        {
          id: '0003',
          name: 'Wojciech’s Drivers Licence',
          image: 'http://placeimg.com/104/152/arch',
          dateCreated: DateTime.local(),
          stepsCompleted: [
            {
              status: DocumentRequestStatus.Request,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.UserNotified,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.Uploaded,
              date: DateTime.local(),
            },
            {
              status: DocumentRequestStatus.Accepted,
              date: DateTime.local(),
            },
          ],
        },
      ]);
    } else {
      setDocuments([]);
    }
  };

  return (
    <>
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.documents.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Card onClick={handleUpdateDocuments}>
          <CardHeader
            title={formatMessage({ id: 'crm.details.documents.title' })}
            action={
              <>
                <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
                  <ManageIcon color="inherit" />
                </IconButton>
                <IconButton variant="roundedContained" size="small" classes={{ root: classes.sortIcon }}>
                  <SearchIcon color="inherit" />
                </IconButton>
                <IconButton
                  aria-label="add"
                  color="primary"
                  size="small"
                  onClick={() => {}}
                  classes={{ root: classes.sortIcon }}
                >
                  <AddIcon color="inherit" />
                </IconButton>
              </>
            }
          />
          <CardContent>
            <Box mx={-2}>
              <ListActionTabs
                tabIndex={tabIndex}
                onTabChange={tab => setTabIndex(tab)}
                countInfo={{
                  [DocumentStatus.Requested]: 3,
                  [DocumentStatus.Checklist]: 1,
                  [DocumentStatus.Uploaded]: 0,
                  [DocumentStatus.Accepted]: 0,
                }}
              />
              <List
                loadingItem={<PropertyItemPlaceholder />}
                isShowHeader
                items={documents}
                itemIndex={'id'}
                renderItem={(document, checked, checkbox) => (
                  <DocumentListItem
                    key={document.id}
                    rowIndex={documents.findIndex(item => item.id === document.id)}
                    checked={checked}
                    checkbox={checkbox}
                    item={document}
                  />
                )}
                sortOptions={sortOptions}
              />
              {documents.length === 0 && (
                <InfoSection emoji="📃" className={classes.emptySection}>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.documents.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.documents.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
            </Box>
          </CardContent>
        </Card>
      </Page>
    </>
  );
};
