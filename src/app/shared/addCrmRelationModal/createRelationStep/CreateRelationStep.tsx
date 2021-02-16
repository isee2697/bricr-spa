import React from 'react';
import { useFormState } from 'react-final-form';

import { useLocale } from 'hooks';
import { SubmitButton } from 'ui/molecules';
import { useStyles } from '../AddCrmRelationModal.styles';
import { Button, DialogActions, DialogContent, Grid } from 'ui/atoms';
import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { GenericField } from 'form/fields';
import { emailValidator, letterValidator, phoneNumberValidator, requireValidator } from 'form/validators';

export const CreateRelationStep = ({ handleGoTo, valid }: AddCrmRelationStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { submitting } = useFormState({
    subscription: { submitting: false },
  });

  return (
    <>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <GenericField
              name="firstName"
              label="crm.relations.first_name"
              validate={[requireValidator, letterValidator]}
            />
          </Grid>
          <Grid item xs={3}>
            <GenericField name="insertion" label="crm.relations.middle_name" validate={[letterValidator]} />
          </Grid>
          <Grid item xs={6}>
            <GenericField
              name="lastName"
              label="crm.relations.last_name"
              validate={[requireValidator, letterValidator]}
            />
          </Grid>
          <Grid item xs={6}>
            <GenericField
              name="email"
              label="crm.relations.email_address"
              validate={[requireValidator, emailValidator]}
            />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="phoneNumber" label="crm.relations.phone_number" validate={[phoneNumberValidator]} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button color="ghost" size="small" onClick={() => handleGoTo(0)}>
          {formatMessage({ id: 'common.previous_step' })}
        </Button>
        <SubmitButton
          type="submit"
          size="large"
          color="primary"
          variant="outlined"
          isLoading={submitting}
          disabled={!valid}
        >
          {formatMessage({ id: 'crm.relation.add_relation.create_new' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
