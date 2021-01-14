import React, { useState, ReactNode, useCallback } from 'react';
import { Typography, useTheme } from '@material-ui/core';

import { Box, Grid, Card, CardContent, Button, Avatar, Placeholder } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { AddFolderDialog } from '../addFolderDialog/AddFolderDialog';
import { DmsFolderIcon } from 'app/dms/dmsDocuments/dmsFolders/dmsFolderIcon/DmsFolderIcon';
import { DocumentListViewContainer } from '../documentListView/DocumentListViewContainer';
import { DocumentFolderType } from '../Documents.types';
import { CrmRelationsDetailsHeader } from 'app/crmRelationsDetails/crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { AddIcon, BuildingIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { useStyles } from './DocumentFolders.styles';
import { DocumentFoldersProps } from './DocumentFolders.types';

const documentFoldersOptions = [
  { title: 'Adriaan van Bergenstraat', type: '', value: 'Adriaan van Bergenstraat', icon: 'CH' },
  { title: 'Adriaan van Hils', type: '', value: 'Adriaan van Hils', icon: 'CH' },
  { title: 'Adriaan van Bils', type: '', value: 'Adriaan van Bils', icon: 'CH' },
  { title: 'adriaanse', type: '', value: 'adriaanse', icon: 'CH' },
];

export const DocumentFolders = ({
  onSidebarOpen,
  isSidebarVisible,
  title,
  path,
  foldersData,
  isLoading,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
}: DocumentFoldersProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<DocumentFolderType | null>(null);

  const handleAdd = () => {
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
  };

  const handleDelete = useCallback((item: DocumentFolderType) => onDeleteFolder?.(item.id), [onDeleteFolder]);

  const handleUpdate = useCallback((item: DocumentFolderType, name: string) => onUpdateFolder?.({ ...item, name }), [
    onUpdateFolder,
  ]);

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
            onClick={handleAdd}
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
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center" className={classes.searchBoxWrapper}>
                <Search
                  options={documentFoldersOptions}
                  endAdornment={<></>}
                  classes={{
                    root: classes.searchBox,
                    input: classes.searchBox,
                  }}
                />
              </Box>
              <Box mt={4}>
                <Grid container>
                  {isLoading ? (
                    <Grid item xs={12}>
                      <PropertyItemPlaceholder />
                    </Grid>
                  ) : foldersData?.length ? (
                    foldersData.map((item, index) => (
                      <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                        <DmsFolderIcon
                          id={item.id}
                          name={item.name}
                          childCount={item.documents?.length || 0}
                          type="secondary"
                          isOpened={item.id === selectedFolder?.id}
                          onClick={() => {
                            setSelectedFolder(item.id === selectedFolder?.id ? null : item);
                          }}
                          onRemove={() => handleDelete(item)}
                          onRename={name => handleUpdate(item, name)}
                        />
                      </Grid>
                    ))
                  ) : null}
                  <Grid item className={classes.listItem} xs={6} sm={4} lg={2}>
                    <DmsFolderIcon
                      id="add_folder"
                      name={formatMessage({ id: 'dms.documents.add_folder' })}
                      onClick={() => {
                        handleAdd();
                      }}
                      isAdd
                    />
                  </Grid>
                </Grid>
              </Box>

              {selectedFolder && (
                <Box mt={4}>
                  <DocumentListViewContainer documents={selectedFolder.documents} path={path} />
                </Box>
              )}
            </CardContent>
          </Card>

          {/* show add folder dialog */}
          {dialog}
        </Grid>
      </Page>
    </>
  );
};
