import React, { useEffect, useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { DialogActions, DialogContent, Box, Typography } from 'ui/atoms';

import { ColumnModalProps } from './ColumnModal.types';
import { useStyles } from './ColumnModal.styles';
import { HeaderColumnItem } from './ColumnModalHeader';
import { ColumnModalItemPlaceholder } from './ColumnModalPlaceholder';

export const ColumnModal: <T>(p: ColumnModalProps<T>) => React.ReactElement<ColumnModalProps<T>> = ({
  isOpened,
  onClose,
  onApply,
  columns = [],
  maxColumns = 5,
}) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [update, setUpdate] = useState(false);
  const [headerColumns, setHeaderColumns] = useState(columns);

  useEffect(() => {
    setHeaderColumns(columns);
  }, [columns]);

  const selectedCount = headerColumns.filter(item => !item.hidden).length;

  const changeColumnOrder = (beforeObj: string, dropObj: string) => {
    const beforeIndex = headerColumns.findIndex(item => item.value === beforeObj);
    const dropIndex = headerColumns.findIndex(item => item.value === dropObj);

    headerColumns[dropIndex].hidden = headerColumns[beforeIndex].hidden;
    headerColumns.splice(beforeIndex + 1, 0, headerColumns[dropIndex]);
    headerColumns.splice(beforeIndex < dropIndex ? dropIndex + 1 : dropIndex, 1);
    setUpdate(!update);
  };

  const addColumnToList = (dropObj: string) => {
    const dropIndex = headerColumns.findIndex(item => item.value === dropObj);

    headerColumns[dropIndex].hidden = false;
    headerColumns.splice(0, 0, headerColumns[dropIndex]);
    headerColumns.splice(dropIndex + 1, 1);
    setUpdate(!update);
  };

  const handleRemoveColumnFromList = (dropObj: string) => {
    const dropIndex = headerColumns.findIndex(item => item.value === dropObj);
    headerColumns[dropIndex].hidden = true;

    setUpdate(!update);
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.table.header_filter.title' })}
    >
      <DialogContent className={classes.modalContent}>
        <DndProvider backend={HTML5Backend}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={3} mb={1}>
            <Typography variant="h4" className={classes.subtitle}>
              {formatMessage({ id: 'column.table.header_filter.active_columns' })}
            </Typography>
            {headerColumns
              .filter(headerColumn => !headerColumn.hidden)
              .map((column, index) => (
                <HeaderColumnItem
                  item={column.value as string}
                  isDisabled={selectedCount >= maxColumns && column.hidden}
                  changeOrder={changeColumnOrder}
                />
              ))}
            <ColumnModalItemPlaceholder onDropColumn={addColumnToList} />
            <Box mt={6} mb={6} className={classes.splitter} />
            <Typography variant="h4" className={classes.subtitle}>
              {formatMessage({ id: 'column.table.header_filter.available_columns' })}
            </Typography>
            {headerColumns
              .filter(headerColumn => !!headerColumn.hidden)
              .map((column, index) => (
                <HeaderColumnItem
                  item={column.value as string}
                  isDisabled={selectedCount >= maxColumns && column.hidden}
                  changeOrder={changeColumnOrder}
                />
              ))}
            <ColumnModalItemPlaceholder onDropColumn={handleRemoveColumnFromList} />
          </Box>
        </DndProvider>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <CancelButton variant="outlined" size="large" onClick={onClose}>
          {formatMessage({ id: 'common.cancel' })}
        </CancelButton>
        <SubmitButton
          type="submit"
          size="large"
          color="primary"
          variant="contained"
          onClick={() => onApply(headerColumns)}
        >
          {formatMessage({ id: 'common.apply' })}
        </SubmitButton>
      </DialogActions>
    </Modal>
  );
};
