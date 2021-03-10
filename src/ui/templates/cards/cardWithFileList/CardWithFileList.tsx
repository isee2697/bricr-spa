import React, { useEffect, useState } from 'react';

import { CardWithBody } from 'ui/templates/cards/cardWithBody/CardWithBody';
import { Box, IconButton, Typography } from 'ui/atoms';
import { AddIcon, SettingsIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { EmailFilters, FileFilters } from 'ui/templates/cards/cardWithFileList/Dictionary';
import { ActiveFilters, hasActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { ColumnModal, List, ListOptionsMenu, ListTableItem } from 'ui/molecules';
import { useLocale } from 'hooks';
import { UploadModalField } from 'ui/organisms';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';

import { FileTypeView, CardWithFileListProps, FileType } from './CardWithFileList.types';
import { fileHeaderCells, renderCardListCell } from './CardWithFileList.helper';
import { useStyles } from './CardWithFileList.styles';

export const CardWithFileList: <F>(p: CardWithFileListProps<F>) => React.ReactElement<CardWithFileListProps<F>> = ({
  onAdd,
  view = FileTypeView.File,
  onUploadFiles,
  files,
  ...props
}) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [headerCells, setHeaderCells] = useState(fileHeaderCells({ view }));
  const [activeFilters, setActiveFilters] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [activeColumns, setActiveColumns] = useState<HeaderColumnItemType<FileType>[]>(
    headerCells.map(cell => ({ value: cell.field, hidden: !!cell.defaultHidden })),
  );

  const activeHeaderCells = activeColumns
    .map(column => headerCells.find(cell => column.value === cell.field && !column.hidden))
    .filter(field => !!field) as ListTableCell<FileType>[];

  useEffect(() => {
    const cells = fileHeaderCells({ view });
    setHeaderCells(cells);
    setActiveColumns(cells.map(cell => ({ value: cell.field, hidden: !!cell.defaultHidden })));
  }, [view]);

  return (
    <>
      <CardWithBody
        titleActions={
          files.length > 0 && (
            <Box display="flex">
              <IconButton aria-label="add" color="primary" size="small" onClick={onAdd}>
                <AddIcon color="inherit" />
              </IconButton>
              <Box mr={2} />
              <FiltersButton
                color="primary"
                data={activeFilters}
                getActiveFilters={newFilters => setActiveFilters(newFilters)}
                filters={view === FileTypeView.File ? FileFilters : EmailFilters}
              />
              <Box mr={2} />
            </Box>
          )
        }
        {...props}
      >
        {view === FileTypeView.File && (
          <Box mb={1}>
            <UploadModalField
              onFileParse={parsedFiles => {
                onUploadFiles && onUploadFiles(parsedFiles);
              }}
              onSetError={() => {}}
              title={
                <>
                  <strong>
                    {formatMessage({
                      id: 'files.details.documents.add_documents',
                    })}
                  </strong>{' '}
                  {formatMessage({
                    id: 'upload_modal.or_drag_and_drop',
                  })}
                </>
              }
            />
          </Box>
        )}
        {files.length > 0 && hasActiveFilters(activeFilters) && (
          <ActiveFilters activeFilters={activeFilters} onDelete={newFilters => setActiveFilters(newFilters)} />
        )}
        {files.length > 0 ? (
          <List<FileType>
            className={classes.list}
            itemIndex="id"
            items={files}
            listIndexHeader={
              <Box display="flex" flexGrow={1} mr={2}>
                <Box flexGrow={1}>
                  <ListTableItem headerCells={activeHeaderCells} isHeader />
                </Box>
                <Box ml={0.5} mr={0.5}>
                  <SettingsIcon onClick={() => setModalOpen(true)} />
                </Box>
              </Box>
            }
            isShowHeader
            renderItem={(item, isSelected, checkbox) => (
              <Box className="card-file-list">
                <Box>{checkbox}</Box>
                <Box flexGrow={1}>
                  <ListTableItem
                    key={item.id}
                    renderCell={renderCardListCell}
                    headerCells={activeHeaderCells}
                    item={item}
                  />
                </Box>
                <Box mr={2}>
                  <ListOptionsMenu />
                </Box>
              </Box>
            )}
          />
        ) : (
          <Typography>{formatMessage({ id: 'files.details.no.files.upload.title' })}</Typography>
        )}
      </CardWithBody>
      <ColumnModal<FileType>
        columns={activeColumns ?? []}
        onApply={columns => {
          setActiveColumns(columns);
          setModalOpen(false);
        }}
        isOpened={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
