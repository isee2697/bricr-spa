import React from 'react';
import { Form } from 'react-final-form';

import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { Alert, DialogContent, DialogActions, Button } from 'ui/atoms';
import { RadioGroupField } from 'form/fields';
import { AddressType } from '../addresses/Addresses.types';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';

import { AddNewAddressModalProps, AddNewAddressSubmit } from './AddNewAddressModal.types';

export const AddNewAddressModal = ({ isOpen, onSubmit }: AddNewAddressModalProps) => {
  const { formatMessage } = useLocale();
  const { close } = useModalDispatch();

  const handleSubmit: AddNewAddressSubmit = async body => {
    const response = await onSubmit(body);

    if (!response) {
      return;
    }

    if (!response.error) {
    }

    return response;
  };

  const handleClose = () => {
    close('add-new-address');
  };

  const addressTypes = Object.keys(AddressType).map(addressType => ({
    label: `dictionaries.contact_information.address_type.${addressType}`,
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
            id: 'crm.details.personal_information_contact_information.addresses.add_new_address.title',
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
              <RadioGroupField name="addressType" options={addressTypes} />
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
