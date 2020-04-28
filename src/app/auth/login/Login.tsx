import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Typography, Alert, InputAdornment, Link } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { LoginInput } from 'api/types';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { UnseeIcon } from 'ui/atoms/icons/unsee/UnseeIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';

import { LoginProps } from './Login.types';

export const Login = ({ onSubmit }: LoginProps) => {
  const [isError, setError] = useState(false);
  const { formatMessage } = useLocale();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

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
        <form onSubmit={handleSubmit} autoComplete="off">
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
                  <UserIcon />
                </InputAdornment>
              ),
            }}
          />

          <GenericField
            name="password"
            type={isPasswordVisible ? 'text' : 'password'}
            label={
              <>
                {formatMessage({ id: AppMessages['login.password'] })}
                <Link component={RouterLink} to={AppRoute.forgotPassword}>
                  {formatMessage({ id: AppMessages['login.forgot_password'] })}
                </Link>
              </>
            }
            placeholder="login.password_placeholder"
            validate={[requireValidator]}
            size="medium"
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setPasswordVisible(v => !v)}
                >
                  {isPasswordVisible ? <UnseeIcon /> : <SeeIcon />}
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" color="primary" fullWidth type="submit" disabled={submitting} size="large">
            {formatMessage({ id: AppMessages['login.submit'] })}
          </Button>
        </form>
      )}
    </Form>
  );
};
