import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { DialogActions, DialogContent, Box, Typography } from 'ui/atoms';

import { HeaderFilterModalProps } from './HeaderFilterModal.types';
import { useStyles } from './HeaderFilterModal.styles';
import { HeaderColumnItem } from './HeaderColumnItem';
import { HeaderColumnItemPlaceholder } from './HeaderColumnItemPlaceholder';

export const HeaderFilterModal = ({
  isOpened,
  onClose,
  onApply,
  columns = [],
  maxColumns = 5,
}: HeaderFilterModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [update, setUpdate] = useState(false);
  const [headerColumns] = useState(columns);

  const selectedCount = headerColumns.filter(item => !item.hidden).length;

  const changeColumnOrder = (beforeObj: string, dropObj: string) => {
    const beforeIndex = headerColumns.findIndex(item => item.value === beforeObj);
    const dropIndex = headerColumns.findIndex(item => item.value === dropObj);

    headerColumns[dropIndex].hidden = headerColumns[beforeIndex].hidden;
    headerColumns.splice(beforeIndex + 1, 0, headerColumns[dropIndex]);
    headerColumns.splice(beforeIndex < dropIndex ? dropIndex + 1 : dropIndex, 1);
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
              {formatMessage({ id: 'crm.table.header_filter.active_columns' })}
            </Typography>
            {headerColumns
              .filter(headerColumn => !headerColumn.hidden)
              .map((column, index) => (
                <HeaderColumnItem
                  item={column.value}
                  isDisabled={selectedCount >= maxColumns && column.hidden}
                  changeOrder={changeColumnOrder}
                />
              ))}
            <HeaderColumnItemPlaceholder />
            <Box mt={6} mb={6} className={classes.splitter} />
            <Typography variant="h4" className={classes.subtitle}>
              {formatMessage({ id: 'crm.table.header_filter.available_columns' })}
            </Typography>
            {headerColumns
              .filter(headerColumn => !!headerColumn.hidden)
              .map((column, index) => (
                <HeaderColumnItem
                  item={column.value}
                  isDisabled={selectedCount >= maxColumns && column.hidden}
                  changeOrder={changeColumnOrder}
                />
              ))}
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
