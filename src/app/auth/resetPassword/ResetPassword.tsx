import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';

import { Button, Typography, Alert } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { GenericField } from 'form/fields';
import { requireValidator, minLengthValidator } from 'form/validators';
import { PasswordArea } from 'app/register/forms/PasswordArea';

import { ResetPasswordProps, ResetPasswordFormValues } from './ResetPassword.types';

export const ResetPassword = ({ onSubmit }: ResetPasswordProps) => {
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { formatMessage } = useLocale();

  const handleSubmit = useCallback(
    async (body: ResetPasswordFormValues) => {
      const valid = await onSubmit(body);

      if (!valid) {
        setError(!valid);
      } else {
        setError(false);
        setSuccess(true);
      }
    },
    [onSubmit],
  );

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h1">{formatMessage({ id: 'reset_password.title' })}</Typography>

          {isError && <Alert severity="error">{formatMessage({ id: 'reset_password.wrong_data' })}</Alert>}

          {isSuccess && <Alert severity="success">{formatMessage({ id: 'reset_password.success' })}</Alert>}

          <GenericField
            name="email"
            label="common.email.label"
            placeholder="common.email.placeholder"
            validate={[requireValidator, minLengthValidator(8)]}
            type="email"
          />

          <PasswordArea error={isError} setError={err => setError(err)} />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={submitting || isSuccess}
            size="large"
          >
            {formatMessage({ id: 'reset_password.submit' })}
          </Button>
        </form>
      )}
    </Form>
  );
};
