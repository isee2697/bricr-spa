import React, { useState, ReactNode, useCallback } from 'react';

import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { Box, Grid, Card, CardHeader, CardContent, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder, Search } from 'ui/molecules';
import { DocumentFolderType } from '../../../../app/crmRelationsDetails/documents/Documents.types';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { DmsAddFolderDialog } from 'app/dms/dmsPims/dmsFolders/dmsAddFolderDialog/DmsAddFolderDialog';

import { useStyles } from './CardWithFolder.styles';
import { CardWithFolderProps } from './CardWithFolder.types';

const documentFoldersOptions = [
  { title: 'Adriaan van Bergenstraat', type: '', value: 'Adriaan van Bergenstraat', icon: 'CH' },
  { title: 'Adriaan van Hils', type: '', value: 'Adriaan van Hils', icon: 'CH' },
  { title: 'Adriaan van Bils', type: '', value: 'Adriaan van Bils', icon: 'CH' },
  { title: 'adriaanse', type: '', value: 'adriaanse', icon: 'CH' },
];

export const CardWithFolder = ({
  foldersData,
  isLoading,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
  setSelectedFolder,
}: CardWithFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedFolder] = useState<DocumentFolderType | null>(null);

  const handleAdd = () => {
    setDialog(
      <DmsAddFolderDialog
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
    <Card className={classes.root}>
      <CardHeader
        title={
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
        }
        action={
          <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </IconButton>
        }
      />

      {isExpanded ? (
        <CardContent>
          <Box mt={4}>
            <Grid container>
              {isLoading ? (
                <Grid item xs={12}>
                  <PropertyItemPlaceholder />
                </Grid>
              ) : foldersData?.length ? (
                foldersData.map((item, index) => (
                  <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                    <FolderContainer
                      id={item.id}
                      name={item.name}
                      childCount={item.documents?.length || 0}
                      type={!item.isUserFolder ? 'primary' : 'secondary'}
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
                <FolderContainer
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
      ) : (
        <Box mt={2} />
      )}

      {/* show add folder dialog */}
      {dialog}
    </Card>
  );
};
