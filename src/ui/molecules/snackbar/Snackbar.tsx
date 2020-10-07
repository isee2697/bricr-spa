import MuiSnackbar from '@material-ui/core/Snackbar/Snackbar';
import React, { useContext, useState } from 'react';

import { Box, DialogActions, IconButton, Typography, Button } from 'ui/atoms';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { CloseIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { SnackbarContext } from 'context/snackbar/snackbarContext/SnackbarContext';

import { useStyles } from './Snackbar.styles';

const severityIconMap = {
  error: '😭',
  warning: '😲',
  success: '😍',
  info: '😇',
};

export const Snackbar = () => {
  const { formatMessage } = useLocale();
  const context = useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error('SnackbarContext must be used within an SnacbarContextController');
  }

  const {
    setSnackbarState,
    snackbarState: {
      isOpen,
      props: { severity, message, modalTitle, modalContent, onUndo },
    },
  } = context;

  const classes = useStyles({ severity });

  const [isModalOpened, setModalOpened] = useState(false);

  const onClose = () => {
    setSnackbarState(s => ({ ...s, isOpen: false }));
  };

  const handleModalClose = () => setModalOpened(false);

  const handleShowDetails = () => {
    onClose();
    setModalOpened(true);
  };
  const handleUndo = () => {
    onUndo();
    onClose();
    setModalOpened(false);
  };

  return (
    <>
      <MuiSnackbar
        className={classes.snackbar}
        open={isOpen}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        autoHideDuration={6000}
        onClose={onClose}
      >
        <Box display="flex" alignItems="center">
          <Typography className={classes.icon}>{severityIconMap[severity]}</Typography>
          <Typography className={classes.message}>{message}</Typography>
          <Button className={classes.button} onClick={handleShowDetails}>
            {formatMessage({ id: 'common.show_details' })}
          </Button>
          <Button className={classes.button} onClick={handleUndo}>
            {formatMessage({ id: 'common.undo' })}
          </Button>
          <IconButton variant="rounded" size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </MuiSnackbar>

      {isModalOpened && (
        <Modal
          fullWidth
          isOpened={isModalOpened}
          onClose={handleModalClose}
          title={
            <Box className={classes.modalTitle} display="inline">
              {modalTitle}
            </Box>
          }
        >
          <Box px={3} pb={3} pt={0.75}>
            {modalContent}
          </Box>
          <DialogActions className={classes.modalActions}>
            <CancelButton variant="outlined" size="large" onClick={handleModalClose} fullWidth={severity === 'error'}>
              {formatMessage({ id: 'common.close' })}
            </CancelButton>
            {severity !== 'error' && (
              <SubmitButton
                className={classes.undoButton}
                size="large"
                color="inherit"
                variant="outlined"
                onClick={handleUndo}
              >
                {formatMessage({ id: 'common.undo' })}
              </SubmitButton>
            )}
          </DialogActions>
        </Modal>
      )}
    </>
  );
};
