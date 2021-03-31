import React, { useState, ReactNode, useCallback } from 'react';

import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { Box, Grid, Card, CardHeader, CardContent, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { DocumentFolderType } from 'app/crmRelationsDetails/documents/Documents.types';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { AddFolderDialog } from 'app/shared/dms/addFolderDialog/AddFolderDialog';
import { DmsFolder, DmsFolderType } from '../../../../api/types';

import { useStyles } from './CardWithFolder.styles';
import { CardWithFolderProps } from './CardWithFolder.types';

export const CardWithFolder = ({
  foldersData = [],
  isLoading,
  onAddFolder,
  onDeleteFolder,
  onUpdateFolder,
  setSelectedFolder,
  title,
  selectedFolder,
}: CardWithFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const [dialog, setDialog] = useState<ReactNode | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const folderWithOrder = foldersData
    .filter(item => !!item.order)
    .sort((a, b) => {
      const first = a?.order ?? 1;
      const second = b?.order ?? 2;

      if (first < second) return -1;

      if (first > second) return 1;

      return 0;
    });
  const folderWithoutOrder = foldersData
    .filter(item => !item.order)
    .sort((a, b) => a.foldername.localeCompare(b.foldername));

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

  const handleDelete = useCallback((item: DmsFolder) => onDeleteFolder?.(item.id), [onDeleteFolder]);

  const handleUpdate = useCallback((item: DmsFolder, name: string) => onUpdateFolder?.({ ...item, foldername: name }), [
    onUpdateFolder,
  ]);

  return (
    <Card data-testid="card-with-folder" className={classes.root}>
      <CardHeader
        title={title}
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
                [...folderWithOrder, ...folderWithoutOrder].map((item, index) => (
                  <Grid item key={index} className={classes.listItem} xs={6} sm={4} lg={2}>
                    <FolderContainer
                      id={item.id}
                      name={item.foldername}
                      childCount={0}
                      type={item.type === DmsFolderType.Default ? 'primary' : 'secondary'}
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
