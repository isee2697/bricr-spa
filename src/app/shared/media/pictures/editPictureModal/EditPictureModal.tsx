import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { FormSubSectionHeader, Modal, SubmitButton, TileButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Box, Button, DialogActions, Grid, ImageHolder } from 'ui/atoms';
import { GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { useStyles } from 'app/shared/media/pictures/editPictureModal/EditPictureModal.styles';
import { UploadImageFieldTypes } from 'form/fields/uploadImageField/UploadImageField.types';
import { EntityWithFiles, LabelProperty } from 'api/types';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { useEntityType, EntityType } from 'app/shared/entityType';

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
  const entityType = useEntityType();

  const [backgroundImage, setBackgroundImage] = useState(initialValues.signedUrl);
  const [isLabelModalOpened, setLabelModalOpened] = useState(false);

  return (
    <>
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
                  <ImageHolder src={backgroundImage} />
                </Grid>
                <Grid xs={7} item className={classes.form}>
                  <GenericField id="name" name="name" label="pim_details.media.add_picture_modal.name" />
                  <UploadImageField
                    name="file"
                    type={UploadImageFieldTypes.DENSE}
                    label="pim_details.media.add_picture_modal.file_name"
                    entityID={picture.id}
                    entity={
                      entityType === EntityType.Property
                        ? EntityWithFiles.MediaPicture
                        : EntityWithFiles.NcpMediaPicture
                    }
                    onSetBackground={setBackgroundImage}
                  />
                  <GenericField
                    id="description"
                    name="description"
                    label="pim_details.media.add_picture_modal.description"
                    placeholder="pim_details.media.add_picture_modal.description_placeholder"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.media.add_picture_modal.type' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                  <Box paddingTop={2} mb={2}>
                    <RadioGroupField
                      xs={2}
                      name="type"
                      options={options}
                      actionElement={
                        <TileButton onClick={() => setLabelModalOpened(true)} className={classes.addTypeButton} />
                      }
                    />
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
      {isModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.Picture}
          isOpened={isLabelModalOpened}
          entityType={entityType}
          onClose={() => setLabelModalOpened(false)}
        />
      )}
    </>
  );
};
