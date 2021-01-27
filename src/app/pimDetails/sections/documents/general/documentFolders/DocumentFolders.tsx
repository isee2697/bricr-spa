import React, { useState, ReactNode } from 'react';

import { Box, Grid, Card, CardContent, IconButton, Button } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { AddFolderDialog } from '../addFolderDialog/AddFolderDialog';
import { DmsFolderIcon } from 'app/dms/dmsDocuments/dmsFolders/dmsFolderIcon/DmsFolderIcon';
import { SettingsIcon, AddIcon } from 'ui/atoms/icons';
import { UploadModal } from 'ui/organisms';
import { DocumentListViewContainer } from '../documentListView/DocumentListViewContainer';
import { DocumentFolderType, DocumentKind } from '../General.types';
import { DocumentTimelineContainer } from '../documentTimeline/DocumentTimelineContainer';

import { useStyles } from './DocumentFolders.styles';
import { DocumentFoldersProps } from './DocumentFolders.types';

const documentFoldersOptions = [
  { title: 'Adriaan van Bergenstraat', type: '', value: 'Adriaan van Bergenstraat', icon: 'CH' },
  { title: 'Adriaan van Hils', type: '', value: 'Adriaan van Hils', icon: 'CH' },
  { title: 'Adriaan van Bils', type: '', value: 'Adriaan van Bils', icon: 'CH' },
  { title: 'adriaanse', type: '', value: 'adriaanse', icon: 'CH' },
];

export const DocumentFolders = ({
  foldersData,
  isLoading,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
}: DocumentFoldersProps) => {
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

  const handleUpload = () => {
    setDialog(
      <UploadModal
        isOpened={true}
        onClose={() => setDialog(null)}
        onUpload={files => {
          setDialog(null);
        }}
      />,
    );
  };

  return (
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
                      onRemove={
                        (!item.kind || item.kind === DocumentKind.Custom) && onDeleteFolder
                          ? () => onDeleteFolder(item.id)
                          : undefined
                      }
                      onRename={
                        (!item.kind || item.kind === DocumentKind.Custom) && onUpdateFolder
                          ? (name: string) => onUpdateFolder({ ...item, name })
                          : undefined
                      }
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
        </CardContent>
      </Card>
      {selectedFolder && (
        <>
          <Box display="flex" alignItems="center" justifyContent="flex-end" p={2}>
            <Box mr={2}>
              <IconButton onClick={() => {}}>
                <SettingsIcon />
              </IconButton>
            </Box>
            <Button
              color="primary"
              startIcon={<AddIcon color="inherit" />}
              variant="contained"
              onClick={handleUpload}
              size="small"
            >
              {formatMessage({ id: 'pim_details.documents.upload_document' })}
            </Button>
            {selectedFolder.kind && selectedFolder.kind !== DocumentKind.Custom && (
              <Box ml={2}>
                <Button
                  color="primary"
                  startIcon={<AddIcon color="inherit" />}
                  variant="contained"
                  onClick={() => {}}
                  size="small"
                >
                  {selectedFolder.kind === DocumentKind.Contracts &&
                    formatMessage({ id: 'pim_details.documents.new_contract' })}
                  {selectedFolder.kind === DocumentKind.ListOfCase &&
                    formatMessage({ id: 'pim_details.documents.new_list_of_case' })}
                  {selectedFolder.kind === DocumentKind.Questionnaires &&
                    formatMessage({ id: 'pim_details.documents.new_questionnaire' })}
                </Button>
              </Box>
            )}
          </Box>
          {selectedFolder.kind && selectedFolder.kind !== DocumentKind.Custom && (
            <Box mb={2}>
              <DocumentTimelineContainer type={selectedFolder.kind} />
            </Box>
          )}
          <DocumentListViewContainer documents={selectedFolder.documents} />
        </>
      )}

      {/* show add folder dialog */}
      {dialog}
    </Grid>
  );
};
