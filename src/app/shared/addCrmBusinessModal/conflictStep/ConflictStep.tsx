import React, { useState, useEffect } from 'react';
import { useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { AddCrmBusinessStepProps } from '../AddCrmBusinessModal.types';
import { ConflictInfo } from 'ui/organisms';

export const ConflictStep = ({ handleGoTo }: AddCrmBusinessStepProps) => {
  const { formatMessage } = useLocale();
  const { submitErrors, submitting, submitSucceeded } = useFormState({
    subscription: { submitErrors: true, submitting: true, submitSucceeded: true },
  });

  const [conflictsCount, setConflictsCount] = useState(submitErrors?.conflictsCount || 0);

  useEffect(() => {
    if (!submitting && !submitSucceeded) {
      setConflictsCount(submitErrors?.conflictsCount || 0);
    }
  }, [submitErrors, submitSucceeded, submitting]);

  return (
    <ConflictInfo
      cancel={formatMessage({ id: 'add_crm_business.conflict.i_will_correct' })}
      confirm={formatMessage({ id: 'add_crm_business.conflict.yes_add_the_same' })}
      messageLineFirst={formatMessage(
        { id: 'add_crm_business.conflict.crm_exists' },
        { count: conflictsCount, strong: msg => <strong>{msg}</strong> },
      )}
      messageLineSecond={formatMessage({ id: 'add_crm_business.conflict.are_you_sure' })}
      onCancel={() => handleGoTo(0)}
    />
  );
};
