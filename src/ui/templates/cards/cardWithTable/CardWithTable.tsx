import React from 'react';
import { useHistory } from 'react-router';

import { CardWithBody } from 'ui/templates/cards/cardWithBody/CardWithBody';
import { Box, IconButton, Typography } from 'ui/atoms';
import { AddIcon, SettingsIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters, hasActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { List, ListTableItem } from 'ui/molecules';
import { useLocale } from 'hooks';
import { UploadModalField } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';

import { CardWithTableActions } from './actions/CardWithTableActions';
import { CardTableModals } from './modals/CardTableModals';
import { CardWithFileListProps, FileType, FileTypeView } from './CardWithTable.types';
import { renderCardListCell, useCardWithTableState } from './CardWithTable.helper';
import { useStyles } from './CardWithTable.styles';

export const CardWithTable: <F extends FileType>(
  p: CardWithFileListProps<F>,
) => React.ReactElement<CardWithFileListProps<F>> = ({
  onAdd,
  view = FileTypeView.File,
  onUploadFiles,
  files,
  actions,
  ...props
}) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const {
    headerCells,
    filters,
    activeFilters,
    setActiveFilters,
    activeColumns,
    setActiveColumns,
    isColumnModalOpen,
    setColumnModalOpen,
    setPreviewModalOpen,
    isPreviewModalOpen,
    setUploadModalOpen,
    isUploadModalOpen,
  } = useCardWithTableState(view);

  return (
    <>
      <CardWithBody
        titleActions={
          files.length > 0 && (
            <Box display="flex">
              <IconButton aria-label="add" color="primary" size="small" onClick={onAdd}>
                <AddIcon
                  color="inherit"
                  onClick={() => (view === FileTypeView.File ? setUploadModalOpen(true) : push(AppRoute.email))}
                />
              </IconButton>
              <Box mr={2} />
              <FiltersButton
                color="primary"
                data={activeFilters}
                getActiveFilters={newFilters => setActiveFilters(newFilters)}
                filters={filters}
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
              onFileParse={upload => onUploadFiles?.(upload)}
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
          <List
            className={classes.list}
            itemIndex="id"
            items={files}
            listIndexHeader={
              <Box display="flex" flexGrow={1} mr={2}>
                <Box flexGrow={1}>
                  <ListTableItem headerCells={headerCells} isHeader />
                </Box>
                <Box ml={0.5} mr={0.5}>
                  <SettingsIcon onClick={() => setColumnModalOpen(true)} />
                </Box>
              </Box>
            }
            isShowHeader
            renderItem={(item, isSelected, checkbox) => (
              <Box className="card-file-list">
                <Box>{checkbox}</Box>
                <Box flexGrow={1}>
                  <ListTableItem<FileType>
                    key={item.id}
                    renderCell={renderCardListCell}
                    headerCells={headerCells}
                    item={item}
                  />
                </Box>
                <CardWithTableActions item={item} actions={actions} />
              </Box>
            )}
          />
        ) : (
          <Typography>{formatMessage({ id: 'files.details.no.files.upload.title' })}</Typography>
        )}
      </CardWithBody>
      <CardTableModals
        columns={{
          columns: activeColumns ?? [],
          onApply: setActiveColumns,
          isOpened: isColumnModalOpen,
          onClose: setColumnModalOpen,
        }}
        viewer={{ documents: files, isOpened: isPreviewModalOpen, onClose: setPreviewModalOpen }}
        upload={{
          isOpened: isUploadModalOpen,
          onUpload: upload => onUploadFiles?.(upload),
          onClose: setUploadModalOpen,
        }}
      />
    </>
  );
};
