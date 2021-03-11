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
import { CardListViewModals } from 'ui/templates/cards/cardWithFileList/modals/CardListViewModals';
import { AppRoute } from 'routing/AppRoute.enum';
import { CardWithFileListActions } from 'ui/templates/cards/cardWithFileList/actions/CardWithfileListActions';

import { CardWithFileListProps, FileType, FileTypeView } from './CardWithFileList.types';
import { renderCardListCell, useCardWithListState } from './CardWithFileList.helper';
import { useStyles } from './CardWithFileList.styles';

export const CardWithFileList: <F extends FileType>(
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
  } = useCardWithListState(view);

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
                <CardWithFileListActions item={item} actions={actions} />
              </Box>
            )}
          />
        ) : (
          <Typography>{formatMessage({ id: 'files.details.no.files.upload.title' })}</Typography>
        )}
      </CardWithBody>
      <CardListViewModals
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
