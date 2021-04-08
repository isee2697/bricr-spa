import React, { useState, ReactNode, useCallback } from 'react';

import { FolderContainer } from 'ui/molecules/folder/FolderContainer';
import { Box, Grid, Card, CardHeader, CardContent, Pagination, Chip, Select, MenuItem } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { PropertyItemPlaceholder } from 'ui/molecules';
import { AddFolderDialog } from 'app/shared/dms/addFolderDialog/AddFolderDialog';
import { DmsFolder, DmsFolderType, ListPimsFilters } from 'api/types';
import { ActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';

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
  titleId,
  titleAmount,
  titleActions,
  titleClass,
  type = 'secondary',
  selectedFolder,
  pagination,
  activeFilters,
  onFilter,
  sorting,
  onSelectFolder,
}: CardWithFolderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [sortValue, setSorting] = useState((sorting?.sortOptions || []).length > 0 ? sorting?.sortOptions[0].key : '');

  const [dialog, setDialog] = useState<ReactNode | null>(null);

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
      {(titleId || title) && (
        <CardHeader
          className={titleClass}
          action={titleActions}
          title={
            <>
              {titleId ? formatMessage({ id: titleId, defaultMessage: titleId }) : title}
              {titleAmount && <Chip size="small" label={titleAmount} className={classes.count} />}
            </>
          }
        />
      )}

      <CardContent>
        {activeFilters &&
          onFilter &&
          Object.keys(activeFilters).length > 0 &&
          Object.values(activeFilters).filter(value => !!value).length > 0 && (
            <Box ml={-2} mr={-2}>
              <ActiveFilters<ListPimsFilters> activeFilters={activeFilters} onDelete={onFilter} />
            </Box>
          )}
        <Box mt={2}>
          <Grid container>
            <Grid item xs={12}>
              {sorting && (
                <Box textAlign="right" mb={4}>
                  <Select
                    variant="outlined"
                    value={sortValue}
                    className={classes.sort}
                    onChange={event => {
                      const value = event?.target.value as string;
                      setSorting(value);
                      sorting.onSort(value);
                    }}
                  >
                    {sorting.sortOptions.map(option => (
                      <MenuItem key={option.key} value={option.key}>
                        {formatMessage({ id: `common.sort_options.${option.name}` })}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              )}
            </Grid>
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
                    childCount={item.filesCount || 0}
                    type={type === 'primary' ? 'main' : item.type === DmsFolderType.Default ? 'primary' : 'secondary'}
                    isOpened={item.id === selectedFolder?.id}
                    onClick={() => {
                      !!onSelectFolder
                        ? onSelectFolder(item.id)
                        : setSelectedFolder(item.id === selectedFolder?.id ? null : item);
                    }}
                    onRemove={() => handleDelete(item)}
                    onRename={name => handleUpdate(item, name)}
                  />
                </Grid>
              ))
            ) : null}
            {onAddFolder && (
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
            )}
          </Grid>
        </Box>
        {pagination && (
          <Box mt={6}>
            <Pagination {...pagination} />
          </Box>
        )}
      </CardContent>

      {/* show add folder dialog */}
      {dialog}
    </Card>
  );
};
