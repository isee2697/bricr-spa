import React, { useState, useEffect } from 'react';
import { useFormState } from 'react-final-form';
import { useLocale } from 'hooks';
import { AddPimStepProps } from '../AddPimModal.types';
import { ConflictInfo } from 'ui/organisms';

export const ConflictStep = ({ onPrev }: AddPimStepProps) => {
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
      cancel={formatMessage({ id: 'add_pim.conflict.i_will_correct' })}
      confirm={formatMessage({ id: 'add_pim.conflict.yes_add_the_same' })}
      messageLineFirst={formatMessage(
        { id: 'add_pim.conflict.properties_exists' },
        { count: conflictsCount, strong: msg => <strong>{msg}</strong> },
      )}
      messageLineSecond={formatMessage({ id: 'add_pim.conflict.are_you_sure' })}
      onCancel={onPrev}
    />
  );
};
