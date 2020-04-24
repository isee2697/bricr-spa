import React, { useState, useCallback } from 'react';
import { Form } from 'react-final-form';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { Button, Logo, Typography, Alert, InputAdornment } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { LoginInput } from 'api/types';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { MailIcon } from 'ui/atoms/icons/mail/MailIcon';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

export const Login = ({ onSubmit }: LoginProps) => {
  const { isAuthorizing } = useAuthState();
  const [error, setError] = useState(false);
  const classes = useStyles();
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
      {({ submitError, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Logo className={classes.logo} />
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: AppMessages['login.title'] })}
          </Typography>

          {error && (
            <Alert className={classes.alert} severity="error">
              {formatMessage({ id: AppMessages['login.wrong_credentials'] })}
            </Alert>
          )}

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
                  <UserIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={isAuthorizing}
            className={classes.submit}
            size="large"
          >
            {formatMessage({ id: AppMessages['login.submit'] })}
          </Button>
        </form>
      )}
    </Form>
  );
};
