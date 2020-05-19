import React, { useState, useEffect } from 'react';
import { useForm, useFormState } from 'react-final-form';

import { DialogActions, Typography } from 'ui/atoms';
import { SubmitButton, InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { AddPimStepProps } from '../AddPimModal.types';

import { useStyles } from './ConflictStep.styles';

export const ConflictStep = ({ onPrev }: AddPimStepProps) => {
  const { formatMessage } = useLocale();
  const { submitErrors, submitting, submitSucceeded } = useFormState({
    subscription: { submitErrors: true, submitting: true, submitSucceeded: true },
  });
  const { change } = useForm();
  const classes = useStyles();
  const [conflictsCount, setConflictsCount] = useState(submitErrors?.conflictsCount || 0);

  useEffect(() => {
    if (!submitting && !submitSucceeded) {
      setConflictsCount(submitErrors?.conflictsCount || 0);
    }
  }, [submitErrors, submitSucceeded, submitting]);

  return (
    <>
      <InfoSection emoji="😲" className={classes.info}>
        <Typography variant="h3">
          {formatMessage(
            { id: 'add_pim.conflict.properties_exists' },
            { count: conflictsCount, strong: msg => <strong>{msg}</strong> },
          )}
        </Typography>
        <Typography variant="h3">{formatMessage({ id: 'add_pim.conflict.are_you_sure' })}</Typography>
      </InfoSection>
      <DialogActions>
        <SubmitButton onClick={onPrev} size="large" color="primary" variant="outlined">
          {formatMessage({ id: 'add_pim.conflict.i_will_correct' })}
        </SubmitButton>
        <SubmitButton
          onClick={() => change('forceAdd', true)}
          isLoading={submitting}
          type="submit"
          size="large"
          color="primary"
          variant="outlined"
        >
          {formatMessage({ id: 'add_pim.conflict.yes_add_the_same' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
