import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { SubmitButton } from 'ui/molecules';
import { useStyles } from '../AddCrmRelationModal.styles';
import { Button, DialogActions, DialogContent, Grid } from 'ui/atoms';
import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { GenericField } from 'form/fields';

export const CreateRelationStep = ({ handleGoTo, onClose, onCreateNewRelation }: AddCrmRelationStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Form onSubmit={onCreateNewRelation} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <GenericField name="firstName" label="crm.relations.first_name" />
              </Grid>
              <Grid item xs={3}>
                <GenericField name="insertion" label="crm.relations.middle_name" />
              </Grid>
              <Grid item xs={6}>
                <GenericField name="lastName" label="crm.relations.last_name" />
              </Grid>
              <Grid item xs={6}>
                <GenericField name="email" label="crm.relations.email_address" />
              </Grid>
              <Grid item xs={6}>
                <GenericField name="phoneNumber" label="crm.relations.phone_number" />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button color="ghost" size="small" onClick={() => handleGoTo(0)}>
              {formatMessage({ id: 'common.previous_step' })}
            </Button>
            <SubmitButton type="submit" size="large" color="primary" variant="outlined">
              {formatMessage({ id: 'crm.relation.add_relation.create_new' })}
            </SubmitButton>
          </DialogActions>
        </form>
      )}
    </Form>
  );
};
