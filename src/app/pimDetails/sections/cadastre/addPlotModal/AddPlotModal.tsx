import React from 'react';

import { InfoSection, Modal, SubmitButton } from 'ui/molecules';
import { AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { Button, DialogActions, Typography } from 'ui/atoms';

import { useStyles } from './AddPlotModal.styles';
import { AddPlotModalProps } from './AddPlotModal.types';

export const AddPlotModal = ({ handleAddPlot, onModalClose, isModalOpened, loading }: AddPlotModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const onConfirmPlotAdd = async () => {
    await handleAddPlot();
    onModalClose();
  };

  return (
    <>
      <Modal
        title={formatMessage({ id: 'pim_details.cadastre.add_plot_modal.title' })}
        fullWidth
        isOpened={isModalOpened}
        onClose={onModalClose}
      >
        <InfoSection emoji="😃" className={classes.content}>
          <Typography variant="h3">
            {formatMessage(
              { id: 'pim_details.cadastre.add_plot_modal.content' },
              { strong: msg => <strong>{msg}</strong> },
            )}
          </Typography>
        </InfoSection>
        <DialogActions classes={{ root: classes.actions }}>
          <Button onClick={onModalClose} color="primary" variant="outlined">
            {formatMessage({ id: 'pim_details.cadastre.add_plot_modal.cancel' })}
          </Button>
          <SubmitButton
            color="primary"
            variant="contained"
            startIcon={<AddIcon color="inherit" />}
            onClick={onConfirmPlotAdd}
            isLoading={loading}
            size="small"
          >
            {formatMessage({ id: 'pim_details.cadastre.add_plot_modal.confirm' })}
          </SubmitButton>
        </DialogActions>
      </Modal>
    </>
  );
};
