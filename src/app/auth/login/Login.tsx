import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography, Alert, InputAdornment, Link } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { LoginInput } from 'api/types';
import { LockIcon } from 'ui/atoms/icons/lock/LockIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';
import { AppRoute } from 'routing/AppRoute.enum';

import { LoginProps } from './Login.types';

export const Login = ({ onSubmit }: LoginProps) => {
  const [isError, setError] = useState(false);
  const { formatMessage } = useLocale();

  const handleSubmit = useCallback(
    async (body: LoginInput) => {
      const valid = await onSubmit(body);

      if (!valid) {
        setError(!valid);
      }
    },
    [onSubmit],
  );

  return (
    <Form onSubmit={handleSubmit}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h1">{formatMessage({ id: AppMessages['login.title'] })}</Typography>

          {isError && <Alert severity="error">{formatMessage({ id: AppMessages['login.wrong_credentials'] })}</Alert>}

          <GenericField
            name="username"
            label="login.username"
            placeholder="login.username_placeholder"
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

          <GenericField
            name="password"
            label="login.password"
            placeholder="login.password_placeholder"
            validate={[requireValidator]}
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          <Link component={RouterLink} to={AppRoute.forgotPassword}>
            {formatMessage({ id: AppMessages['login.forgot_password'] })}
          </Link>

          <Button variant="contained" color="primary" fullWidth type="submit" disabled={submitting} size="large">
            {formatMessage({ id: AppMessages['login.submit'] })}
          </Button>
        </form>
      )}
    </Form>
  );
};
