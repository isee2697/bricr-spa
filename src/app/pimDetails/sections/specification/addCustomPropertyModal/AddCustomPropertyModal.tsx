import React from 'react';
import { Form } from 'react-final-form';

import { GenericField } from 'form/fields';
import { Modal, SubmitButton, IconPicker, CancelButton } from 'ui/molecules';
import { Alert, DialogContent, DialogActions, Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import {
  AddIcon,
  BellIcon,
  BuildingIcon,
  DocIcon,
  FilesIcon,
  FolderIcon,
  GraphArrowIcon,
  HomeIcon,
  LinkIcon,
  MailIcon,
  PinIcon,
  TasksIcon,
  FilterIcon,
  EditIcon,
  SquareIcon,
} from 'ui/atoms/icons';

import { AddCustomPropertyModalProps } from './AddCustomPropertyModal.types';
import { useStyles } from './AddCustomPropertyModal.styles';

const icons = [
  <AddIcon color="inherit" />,
  <BellIcon color="inherit" />,
  <BuildingIcon color="inherit" />,
  <DocIcon color="inherit" />,
  <FilesIcon color="inherit" />,
  <FolderIcon color="inherit" />,
  <GraphArrowIcon color="inherit" />,
  <HomeIcon color="inherit" />,
  <LinkIcon color="inherit" />,
  <MailIcon color="inherit" />,
  <PinIcon color="inherit" />,
  <AddIcon color="inherit" />,
  <TasksIcon color="inherit" />,
  <FilesIcon color="inherit" />,
  <FolderIcon color="inherit" />,
  <FilterIcon color="inherit" />,
  <EditIcon color="inherit" />,
  <SquareIcon color="inherit" />,
];

export const AddCustomPropertyModal = ({ isOpened, onClose, onSubmit }: AddCustomPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.specification.custom_property_modal.title' })}
      className={classes.modal}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={5} className={classes.col}>
                  <GenericField
                    name="service.meter.name"
                    label="pim_details.specification.custom_property_modal.input_label"
                    placeholder="pim_details.specification.custom_property_modal.input_placeholder"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box mb={1.5}>
                    <label>
                      {formatMessage({ id: 'pim_details.specification.custom_property_modal.icons_label' })}
                    </label>
                  </Box>
                  <IconPicker iconList={icons} selectedIcon={() => {}} />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'pim_details.specification.custom_property_modal.submit_button' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
