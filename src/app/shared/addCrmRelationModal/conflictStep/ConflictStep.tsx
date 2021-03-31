import React, { useState, useEffect } from 'react';
import { useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { ConflictInfo } from 'ui/organisms';
import { CrmType } from 'api/types';

export const ConflictStep = ({ handleGoTo, crmType }: AddCrmRelationStepProps) => {
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
      cancel={formatMessage({ id: 'add_crm_relation.conflict.i_will_correct' })}
      confirm={formatMessage({ id: 'add_crm_relation.conflict.yes_add_the_same' })}
      messageLineFirst={formatMessage(
        { id: 'add_crm_relation.conflict.crm_exists' },
        { count: conflictsCount, strong: msg => <strong>{msg}</strong> },
      )}
      messageLineSecond={formatMessage({ id: 'add_crm_relation.conflict.are_you_sure' })}
      onCancel={() => handleGoTo(!!crmType ? (crmType === CrmType.Relation ? 1 : 2) : 0)}
    />
  );
};
