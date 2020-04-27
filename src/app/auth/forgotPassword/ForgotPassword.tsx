import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography, Alert, InputAdornment, Link } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { ForgotPasswordInput } from 'api/types';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { AppRoute } from 'routing/AppRoute.enum';

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
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
          />

          <Link component={RouterLink} to={AppRoute.login}>
            {formatMessage({ id: AppMessages['forgot_password.back_to_login'] })}
          </Link>

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
