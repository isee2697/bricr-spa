import React from 'react';
import { useTheme } from '@material-ui/core';

import { Avatar, Box, Grid, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { BuildingIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { DocumentFolders } from './documentFolders/DocumentFolders';
import { DocumentsGeneralProps } from './General.types';
import { useStyles } from './General.styles';

export const DocumentsGeneral = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  documents,
  metaInfo,
  onAdd,
  onRemove,
  onUpdate,
}: DocumentsGeneralProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page withoutHeader>
        <Grid xs={12} item>
          <Box display="flex" alignItems="center">
            <Avatar variant="rounded" bgcolor={theme.palette.red.light} className={classes.avatarIcon}>
              <Box color={theme.palette.red.main}>
                <BuildingIcon color="inherit" />
              </Box>
            </Avatar>
            <Typography variant="h1">{formatMessage({ id: 'pim_details.documents.document_folders' })}</Typography>
          </Box>
        </Grid>
        <DocumentFolders
          foldersData={[...documents].sort((document1, document2) => (document1.name < document2.name ? -1 : 1))}
          isLoading={false}
          isError={false}
          onAddFolder={onAdd}
          onDeleteFolder={onRemove}
          onUpdateFolder={onUpdate}
        />
      </Page>
    </>
  );
};
