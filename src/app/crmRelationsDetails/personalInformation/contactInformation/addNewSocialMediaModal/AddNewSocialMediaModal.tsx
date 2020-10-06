import React from 'react';
import { Form } from 'react-final-form';
import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { SocialMediaType } from '../socialMedia/SocialMedia.types';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';

import { AddNewSocialMediaModalProps, AddNewSocialMediaSubmit } from './AddNewSocialMediaModal.types';

export const AddNewSocialMediaModal = ({ isOpen, onSubmit }: AddNewSocialMediaModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleSubmit: AddNewSocialMediaSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
    }

    return response;
  };

  const handleClose = () => {
    close('add-new-social-media');
  };

  const addressTypes = Object.keys(SocialMediaType).map(addressType => ({
    label: `dictionaries.contact_information.social_media_type.${addressType}`,
    icon: <SquareIcon />,
    value: addressType,
  }));

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit, form, submitErrors, values }) => (
        <Modal
          fullWidth
          isOpened={isOpen}
          onClose={() => {
            form.reset();
            handleClose();
          }}
          title={formatMessage({
            id: 'crm.details.personal_information_contact_information.addresses.add_new_social_media.title',
          })}
        >
          <form
            onSubmit={async event => {
              await handleSubmit(event);
              form.reset();
            }}
            autoComplete="off"
          >
            {submitErrors && submitErrors.error === 'unknown' && (
              <DialogContent>
                <Alert severity="error">
                  {formatMessage({ id: 'crm.details.personal_information_contact_information.add_new.error.unknown' })}
                </Alert>
              </DialogContent>
            )}
            <DialogContent>
              <RadioGroupField name="socialMediaType" options={addressTypes} />
            </DialogContent>
            <DialogActions>
              <Button color="ghost" size="small">
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
              >
                {formatMessage({ id: 'common.add' })}
              </SubmitButton>
            </DialogActions>
          </form>
        </Modal>
      )}
    </Form>
  );
};
