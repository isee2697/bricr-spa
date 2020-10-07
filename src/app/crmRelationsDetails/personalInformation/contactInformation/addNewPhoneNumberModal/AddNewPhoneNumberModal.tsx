import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { PhoneNumberType } from '../phoneNumbers/PhoneNumbers.types';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';

import { AddNewPhoneNumberModalProps, AddNewPhoneNumberSubmit } from './AddNewPhoneNumberModal.types';

export const AddNewPhoneNumberModal = ({ isOpen, onSubmit }: AddNewPhoneNumberModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleSubmit: AddNewPhoneNumberSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
    }

    return response;
  };

  const handleClose = () => {
    close('add-new-phone-number');
  };

  const phoneNumberTypes = Object.keys(PhoneNumberType).map(phoneNumberType => ({
    label: `dictionaries.contact_information.phone_number_type.${phoneNumberType}`,
    icon: <SquareIcon />,
    value: phoneNumberType,
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
            id: 'crm.details.personal_information_contact_information.addresses.add_new_phone_number.title',
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
              <RadioGroupField name="phoneNumberType" options={phoneNumberTypes} />
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
