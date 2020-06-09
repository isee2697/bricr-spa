import React from 'react';
import { Form } from 'react-final-form';

import { FormSubSection, Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box, Button, DialogActions, Grid, ImageHolder } from 'ui/atoms';
import { GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { useStyles } from 'app/pimDetails/sections/media/pictures/editPictureModal/EditPictureModal.styles';
import { UploadImageFieldTypes } from 'form/fields/uploadImageField/UploadImageField.types';

import { EditPictureModalProps } from './EditPictureModal.types';

export const EditPictureModal = ({
  isModalOpened,
  onModalClose,
  picture,
  initialValues,
  options,
  onSubmit,
}: EditPictureModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      title={formatMessage({ id: 'pim_details.media.add_picture_modal.title' })}
      fullWidth
      isOpened={isModalOpened}
      onClose={onModalClose}
    >
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4} className={classes.container}>
              <Grid xs={5} item>
                <ImageHolder src={picture.image.url ?? undefined} />
              </Grid>
              <Grid xs={7} item className={classes.form}>
                <GenericField id="name" name="name" label="pim_details.media.add_picture_modal.name" />
                <UploadImageField
                  name="image"
                  type={UploadImageFieldTypes.DENSE}
                  label="pim_details.media.add_picture_modal.file_name"
                  initialFileName={picture.image.fileName}
                />
                <GenericField
                  id="description"
                  name="name"
                  label="pim_details.media.add_picture_modal.description"
                  placeholder="pim_details.media.add_picture_modal.description_placeholder"
                />
              </Grid>
              <Grid item xs={12}>
                <FormSubSection
                  noBorder
                  title={formatMessage({ id: 'pim_details.media.add_picture_modal.title' })}
                  subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                />
                <Box paddingTop={2} mb={2}>
                  <RadioGroupField xs={4} lg={2} name="type" options={options} />
                </Box>
              </Grid>
            </Grid>
            <DialogActions className={classes.actions}>
              <Button onClick={onModalClose} color="primary" variant="outlined">
                {formatMessage({ id: 'pim_details.media.add_picture_modal.cancel' })}
              </Button>
              <SubmitButton
                color="primary"
                variant="contained"
                onClick={handleSubmit}
                isLoading={submitting}
                size="small"
              >
                {formatMessage({ id: 'pim_details.media.add_picture_modal.confirm' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
