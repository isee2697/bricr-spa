import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { SubmitButton } from 'ui/molecules';
import { useStyles } from '../AddCrmBusinessModal.styles';
import { Button, DialogActions, DialogContent, Grid } from 'ui/atoms';
import { AddCrmBusinessStepProps } from '../AddCrmBusinessModal.types';
import { GenericField } from 'form/fields';

export const CreateBusinessStep = ({ handleGoTo, onClose, onCreateNewBusiness }: AddCrmBusinessStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Form onSubmit={onCreateNewBusiness} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <GenericField name="business" label="crm.business.first_name" />
              </Grid>
              <Grid item xs={6}>
                <GenericField name="email" label="crm.businesss.middle_name" />
              </Grid>
              <Grid item xs={6}>
                <GenericField name="phoneNumber" label="crm.businesss.last_name" />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button color="ghost" size="small" onClick={() => handleGoTo(0)}>
              {formatMessage({ id: 'common.previous_step' })}
            </Button>
            <SubmitButton type="submit" size="large" color="primary" variant="contained">
              {formatMessage({ id: 'crm.business.add_business.create_new' })}
            </SubmitButton>
          </DialogActions>
        </form>
      )}
    </Form>
  );
};
