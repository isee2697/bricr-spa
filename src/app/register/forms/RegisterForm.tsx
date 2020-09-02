import React from 'react';
import { Form } from 'react-final-form';

import { Typography, Button } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from '../../../hooks';

import { RegisterFormProps } from './RegisterForm.types';

export const RegisterForm = ({ isSubmitEnabled, onSubmit, checkSpaceAvailable }: RegisterFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <Form onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Typography>Claim your bricr space</Typography>
          <GenericField label={formatMessage({ id: 'common.name' })} name="name" />
          <GenericField name="email" />
          <GenericField onChange={e => checkSpaceAvailable(e.target.value)} name="space" />
          <Typography>By clicking below, you agree to the bricr Cloud Terms of Service and Privacy Policy</Typography>
          <Button type="submit" disabled={!isSubmitEnabled} variant="contained" color="primary">
            I agree
          </Button>
        </form>
      )}
    </Form>
  );
};
