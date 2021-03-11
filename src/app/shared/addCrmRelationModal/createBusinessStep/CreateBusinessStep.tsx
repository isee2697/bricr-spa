import React from 'react';

import { useLocale } from 'hooks';
import { SubmitButton } from 'ui/molecules';
import { useStyles } from '../AddCrmRelationModal.styles';
import { Button, DialogActions, DialogContent, Grid } from 'ui/atoms';
import { AddCrmRelationStepProps } from '../AddCrmRelationModal.types';
import { GenericField } from 'form/fields';

export const CreateBusinessStep = ({ handleGoTo, onClose, crmType }: AddCrmRelationStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <GenericField name="business" label="crm.business.first_name" />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="middleName" label="crm.businesss.middle_name" />
          </Grid>
          <Grid item xs={6}>
            <GenericField name="lastName" label="crm.businesss.last_name" />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actions}>
        {!crmType && (
          <Button color="ghost" size="small" onClick={() => handleGoTo(0)}>
            {formatMessage({ id: 'common.previous_step' })}
          </Button>
        )}
        {!!crmType && (
          <Button color="ghost" size="small" onClick={() => onClose()}>
            {formatMessage({ id: 'common.cancel' })}
          </Button>
        )}
        <SubmitButton type="submit" size="large" color="primary" variant="contained">
          {formatMessage({ id: 'crm.business.add_business.create_new' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
