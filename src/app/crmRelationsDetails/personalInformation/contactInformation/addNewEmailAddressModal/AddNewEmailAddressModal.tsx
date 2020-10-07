import React from 'react';
import { Form } from 'react-final-form';
import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { EmailAddressType } from '../emailAddresses/EmailAddresses.types';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';

import { AddNewEmailAddressModalProps, AddNewEmailAddressSubmit } from './AddNewEmailAddressModal.types';

export const AddNewEmailAddressModal = ({ isOpen, onSubmit }: AddNewEmailAddressModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleSubmit: AddNewEmailAddressSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
    }

    return response;
  };

  const handleClose = () => {
    close('add-new-email-address');
  };

  const addressTypes = Object.keys(EmailAddressType).map(addressType => ({
    label: `dictionaries.contact_information.email_address_type.${addressType}`,
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
            id: 'crm.details.personal_information_contact_information.addresses.add_new_email_address.title',
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
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.add_new_email_address.error.unknown',
                  })}
                </Alert>
              </DialogContent>
            )}
            <DialogContent>
              <RadioGroupField name="emailAddressType" options={addressTypes} />
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
