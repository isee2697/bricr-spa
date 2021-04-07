import React from 'react';
import { useHistory } from 'react-router';

import { CardWithBody } from 'ui/templates/cards/cardWithBody/CardWithBody';
import { Box, IconButton } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { FiltersButton } from 'ui/molecules/filters/FiltersButton';
import { ActiveFilters, hasActiveFilters } from 'ui/molecules/filters/activeFilters/ActiveFilters';
import { List } from 'ui/molecules';
import { useLocale } from 'hooks';
import { UploadModalField } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';
import { EmptyStateFilter } from 'ui/organisms/emptyStateFilter/EmptyStateFilter';

import { CardTableModals } from './modals/CardTableModals';
import { CardWithFileListProps, FileType, FileTypeView } from './CardWithTable.types';
import { renderItem, renderListIndexHeaderCell, useCardWithTableState } from './CardWithTable.helper';
import { useStyles } from './CardWithTable.styles';

export const CardWithTable: <F extends FileType>(
  p: CardWithFileListProps<F>,
) => React.ReactElement<CardWithFileListProps<F>> = ({ onAdd, view, onUploadFiles, files, actions, ...props }) => {
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
            listIndexHeader={renderListIndexHeaderCell(headerCells, setColumnModalOpen)}
            renderItem={(item, isSelected, checkbox) => renderItem(item, isSelected, checkbox, headerCells, actions)}
            emptyPlaceholder={<EmptyStateFilter type={view} isFiltered={Object.keys(activeFilters).length > 0} />}
          />
        ) : (
          <EmptyStateFilter type={view} isFiltered={hasActiveFilters(activeFilters)} />
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
