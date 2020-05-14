import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';

import { Button, Typography, Alert, InputAdornment } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { ForgotPasswordInput } from 'api/types';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';

import { ForgotPasswordProps } from './ForgotPassword.types';

export const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
  const [isError, setError] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { formatMessage } = useLocale();

  const handleSubmit = useCallback(
    async (body: ForgotPasswordInput) => {
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
          <Typography variant="h1">{formatMessage({ id: AppMessages['forgot_password.title'] })}</Typography>

          {isError && (
            <Alert severity="error">{formatMessage({ id: AppMessages['forgot_password.wrong_username'] })}</Alert>
          )}

          {isSuccess && (
            <Alert severity="success">{formatMessage({ id: AppMessages['forgot_password.success'] })}</Alert>
          )}

          <GenericField
            name="username"
            label="forgot_password.username"
            placeholder="forgot_password.username_placeholder"
            validate={[requireValidator]}
            disabled={submitting || isSuccess}
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailIcon />
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
            {formatMessage({ id: AppMessages['forgot_password.submit'] })}
          </Button>
        </form>
      )}
    </Form>
  );
};
