import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { useLocale } from 'hooks';
import { Modal, SubmitButton, CancelButton } from 'ui/molecules';
import { CheckboxGroupField } from 'form/fields';
import { DialogContent, DialogActions } from 'ui/atoms';
import { HomeIcon, LockIcon, RefreshIcon } from 'ui/atoms/icons';

import { AdditionalInformationModalProps } from './AdditionalInformationModal.types';

const ADDITIONAL_INFORMATIONS = [
  {
    label: 'pim_details.general.extra_address_information.title',
    icon: <HomeIcon color="inherit" />,
    value: 'showExtraAddress',
  },
  {
    label: 'pim_details.general.identification_number.title',
    icon: <LockIcon color="inherit" />,
    value: 'showIdentificationNumber',
  },
  {
    label: 'pim_details.general.attention.title',
    icon: <LockIcon color="inherit" />,
    value: 'showAttentionNote',
  },
];

export const AdditionalInformationModal = ({
  isOpened,
  onClose,
  initialValues,
  onSubmit,
}: AdditionalInformationModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'pim_details.general.additional_information_modal.title' })}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        mutators={{ ...arrayMutators }}
        initialValuesEqual={() => true}
      >
        {({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <CheckboxGroupField name="visibility" options={ADDITIONAL_INFORMATIONS} xs={6} orientation="horizontal" />
            </DialogContent>

            <DialogActions>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<RefreshIcon />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {formatMessage({ id: 'pim_details.general.additional_information_modal.update_cards' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
