import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { DatePickerField } from 'form/fields';
import { FormModal } from 'ui/organisms';

import { PassedAwayModalProps } from './PassedAwayModal.types';
import { useStyles } from './PassedAwayModal.styles';

export const PassedAwayModal = ({ onClose, onSubmit, isOpened }: PassedAwayModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({
        id: 'crm.details.partner.passed_away',
      })}
      addText={formatMessage({ id: 'common.update' })}
      addIcon={<></>}
    >
      <DatePickerField
        label={formatMessage({ id: 'crm.details.parnter.date_of_death' })}
        placeholder={formatMessage({ id: 'common.date_picker' })}
        name="dateOfDeath"
        className={classes.datePicker}
      />
    </FormModal>
  );
};
