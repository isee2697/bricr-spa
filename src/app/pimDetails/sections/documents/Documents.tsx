import React from 'react';
import { useTheme } from '@material-ui/core';

import { Avatar, Box, Grid, Placeholder, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { BuildingIcon } from 'ui/atoms/icons';

import { DocumentsProps } from './Documents.types';
import { DocumentStats } from './documentStats/DocumentStats';
import { DocumentFolders } from './documentFolders/DocumentFolders';
import { useStyles } from './Documents.styles';

export const Documents = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  documents,
  metaInfo,
  onAdd,
  onRemove,
  onUpdate,
}: DocumentsProps) => {
  const theme = useTheme();
  const classes = useStyles();

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
            <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
          </Box>
        </Grid>
        <Box mt={3} mb={2} width="100%">
          <DocumentStats metaInfo={metaInfo} />
        </Box>
        <DocumentFolders
          foldersData={documents}
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
