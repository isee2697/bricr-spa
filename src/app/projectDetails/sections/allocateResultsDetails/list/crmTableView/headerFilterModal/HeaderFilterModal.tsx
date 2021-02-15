import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { DialogActions, DialogContent, Box } from 'ui/atoms';

import { HeaderFilterModalProps } from './HeaderFilterModal.types';
import { useStyles } from './HeaderFilterModal.styles';
import { HeaderColumnItem } from './HeaderColumnItem';

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

  const toggleColumnVisibility = (index: number) => {
    headerColumns[index].hidden = !headerColumns[index].hidden;
    setUpdate(!update);
  };

  const changeColumnOrder = (beforeObj: string, dropObj: string) => {
    const beforeIndex = headerColumns.findIndex(item => item.value === beforeObj);
    const dropIndex = headerColumns.findIndex(item => item.value === dropObj);

    headerColumns.splice(beforeIndex + 1, 0, headerColumns[dropIndex]);
    headerColumns.splice(beforeIndex < dropIndex ? dropIndex + 1 : dropIndex, 1);
    setUpdate(!update);
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.allocate_results.header_filter.title' })}
    >
      <DialogContent className={classes.modalContent}>
        <DndProvider backend={HTML5Backend}>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={3} mb={1}>
            {headerColumns.map((column, index) => (
              <HeaderColumnItem
                item={column.value}
                isShow={!column.hidden}
                setShow={() => toggleColumnVisibility(index)}
                isDisabled={selectedCount >= maxColumns && column.hidden}
                changeOrder={changeColumnOrder}
              />
            ))}
          </Box>
        </DndProvider>
      </DialogContent>
      <DialogActions className={classes.modalFooter}>
        <CancelButton size="large" onClick={onClose}>
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
