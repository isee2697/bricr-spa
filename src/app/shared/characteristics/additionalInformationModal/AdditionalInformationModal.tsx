import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { useLocale } from 'hooks';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { CheckboxGroupField } from 'form/fields';
import { DialogActions, DialogContent } from 'ui/atoms';
import { HomeIcon, LockIcon, RefreshIcon } from 'ui/atoms/icons';
import { CharacteristicsSections } from 'api/types';

import { AdditionalInformationModalProps } from './AdditionalInformationModal.types';

const withLockIcon = (section: CharacteristicsSections) =>
  [
    CharacteristicsSections.Phase,
    CharacteristicsSections.AccountManagers,
    CharacteristicsSections.AttentionField,
  ].includes(section);

export const AdditionalInformationModal = ({
  isOpened,
  onClose,
  initialValues,
  onSubmit,
  availableSections,
}: AdditionalInformationModalProps) => {
  const { formatMessage } = useLocale();

  const ADDITIONAL_INFORMATIONS = availableSections.map(section => ({
    label: `dictionaries.characteristic_sections.${section}`,
    icon: withLockIcon(section as CharacteristicsSections) ? (
      <LockIcon color="inherit" />
    ) : (
      <HomeIcon color="inherit" />
    ),
    value: section,
  }));

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
              <CheckboxGroupField name="sections" options={ADDITIONAL_INFORMATIONS} xs={6} orientation="horizontal" />
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
