import React, { useState, ReactNode, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Avatar, Box, Button, Grid, Loader, NavBreadcrumb, Placeholder, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { AddIcon, BuildingIcon } from 'ui/atoms/icons';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { Page } from 'ui/templates';

import { useStyles } from './Documents.styles';
import { DocumentsProps } from './Documents.types';
import { DocumentFolders } from './documentFolders/DocumentFolders';
import { AddFolderDialog } from './addFolderDialog/AddFolderDialog';

export const Documents = ({
  path,
  title,
  documents,
  onSidebarOpen,
  isSidebarVisible,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
}: DocumentsProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const [dialog, setDialog] = useState<ReactNode | null>(null);

  const handleShowAddFolder = useCallback(() => {
    setDialog(
      <AddFolderDialog
        isOpened={true}
        isAdd={true}
        onClose={() => {
          setDialog(null);
        }}
        onSubmit={({ folderName }) => {
          if (onAddFolder) {
            onAddFolder(folderName);
          }
          setDialog(null);

          return new Promise(resolve => {});
        }}
      />,
    );
  }, [onAddFolder]);

  if (!documents) {
    return <Loader />;
  }

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.documents.title' })}
        to="/documents"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader
        onSidebarOpen={onSidebarOpen}
        isSidebarVisible={isSidebarVisible}
        actions={
          <Button
            size="small"
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={handleShowAddFolder}
          >
            {formatMessage({ id: 'crm.details.documents.create_document' })}
          </Button>
        }
      />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Avatar variant="rounded" bgcolor={theme.palette.red.light} className={classes.avatarIcon}>
              <Box color={theme.palette.red.main}>
                <BuildingIcon color="inherit" />
              </Box>
            </Avatar>
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
        </Grid>
        <DocumentFolders
          path={path}
          foldersData={documents}
          isLoading={false}
          isError={false}
          onAddFolder={onAddFolder}
          onDeleteFolder={onDeleteFolder}
          onUpdateFolder={onUpdateFolder}
        />
      </Page>

      {dialog}
    </>
  );
};
