import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import { Link as RouterLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl-phraseapp';

import { Alert, Box, Button, Checkbox, FormControlLabel, InputAdornment, Link, Typography, Grid } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { LoginInput } from 'api/types';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { UnseeIcon } from 'ui/atoms/icons/unsee/UnseeIcon';
import { AppRoute } from 'routing/AppRoute.enum';
import { UserIcon } from 'ui/atoms/icons/user/UserIcon';
import { GoogleIcon, OutlookIcon } from 'ui/atoms/icons';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

export const Login = ({ onSubmit }: LoginProps) => {
  const [isError, setError] = useState(false);
  const { formatMessage } = useLocale();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const classes = useStyles();

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
          <Typography variant="h1">
            <FormattedMessage id="login.title" />
          </Typography>

          {isError && <Alert severity="error">{formatMessage({ id: 'login.wrong_credentials' })}</Alert>}

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
            label="login.password"
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

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <FormControlLabel
              control={<Checkbox color="primary" onChange={() => {}} name="remember.me" />}
              label={<Typography variant="h4">{formatMessage({ id: 'login.remember_me' })}</Typography>}
            />
            <Link component={RouterLink} to={AppRoute.forgotPassword}>
              {formatMessage({ id: 'login.forgot_password' })}
            </Link>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={submitting}
            size="large"
            role="loginButton"
          >
            {formatMessage({ id: 'login.submit' })}
          </Button>

          <Grid container spacing={3} className={classes.socialIconWrapper}>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                disabled={submitting}
                size="large"
                className={classes.socialLoginButton}
              >
                <GoogleIcon className={classes.socialIcon} /> {formatMessage({ id: 'login.google_login' })}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                disabled={submitting}
                size="large"
                className={classes.socialLoginButton}
              >
                <OutlookIcon className={classes.socialIcon} /> {formatMessage({ id: 'login.google_login' })}
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Form>
  );
};
