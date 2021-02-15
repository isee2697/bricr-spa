import React, { useState, ReactNode } from 'react';

import { Box, Grid, Card, CardContent, IconButton, Collapse } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { AddFolderDialog } from '../addFolderDialog/AddFolderDialog';
import { DmsFolderIcon } from 'app/dms/dmsPims/dmsFolders/dmsFolderIcon/DmsFolderIcon';
import { ArrowUpIcon, ArrowDownIcon } from 'ui/atoms/icons';
import { DocumentListViewContainer } from '../documentListView/DocumentListViewContainer';
import { DocumentKind } from '../General.types';
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
  selectedFolder,
  onSelectFolder,
}: DocumentFoldersProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [showFolders, setShowFolders] = useState(true);

  const [dialog, setDialog] = useState<ReactNode | null>(null);

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

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              className={classes.searchBoxWrapper}
            >
              <Search
                options={documentFoldersOptions}
                endAdornment={<></>}
                classes={{
                  root: classes.searchBox,
                  input: classes.searchBox,
                }}
              />
            </Box>
            <IconButton size="small" variant="roundedContained" onClick={() => setShowFolders(!showFolders)}>
              {showFolders ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </IconButton>
          </Box>
          <Collapse in={showFolders}>
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
                          onSelectFolder(item.id === selectedFolder?.id ? null : item);
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
          </Collapse>
        </CardContent>
      </Card>
      {selectedFolder && (
        <>
          <Box mt={2} />
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
