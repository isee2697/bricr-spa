import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { LockIcon } from 'ui/atoms/icons/lock/LockIcon';
import { Button, Typography, Alert, InputAdornment } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { GenericField } from 'form/fields';
import { requireValidator, fieldMatchValidator, minLengthValidator } from 'form/validators';

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
            name="password"
            label="reset_password.new_password"
            placeholder="reset_password.new_password_placeholder"
            validate={[requireValidator, minLengthValidator(8)]}
            size="medium"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          <GenericField
            name="passwordRepeat"
            label="reset_password.repeat_password"
            placeholder="reset_password.repeat_password_placeholder"
            validate={[requireValidator, fieldMatchValidator('password', 'reset_password.repeat_password_error')]}
            size="medium"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

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
