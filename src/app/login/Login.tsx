import React, { useState, useCallback } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { Button, TextField, Logo, Typography, Alert } from 'ui/atoms';

import { LoginProps } from './Login.types';
import { useStyles } from './Login.styles';

/*
 * TODO:
 *   - create re-usable Input/Button components and replace inputs and/or button with them
 *     you can use React.forwardRef in order to pass reference to the proper element
 *     https://pl.reactjs.org/docs/forwarding-refs.html
 * */

export const Login = ({ onSubmit }: LoginProps) => {
  const { register, handleSubmit, errors } = useForm();
  const { isAuthorizing } = useAuthState();
  const [error, setError] = useState(false);
  const classes = useStyles();

  const handleSubmitCallback = useCallback(
    async (body: FieldValues) => {
      const valid = await onSubmit(body);

      if (!valid) {
        setError(!valid);
      }
    },
    [onSubmit],
  );

  return (
    <>
      <Logo className={classes.logo} />

      <Typography variant="h1" className={classes.title}>
        Sign up to Bricr
      </Typography>

      {error && <Alert severity="error">Invalid username and/or password</Alert>}

      <form onSubmit={handleSubmit(handleSubmitCallback)}>
        <TextField
          name="username"
          id="username"
          label="Username"
          style={{ margin: '16px 0 16px 0' }}
          placeholder="Enter username"
          fullWidth
          margin="normal"
          variant="outlined"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          helperText={errors.username ? 'This field is required' : undefined}
          inputRef={register({ required: true })}
          error={!!errors.username}
        />

        <TextField
          name="password"
          id="password"
          label="Password"
          style={{ margin: '16px 0 16px 0' }}
          placeholder="Enter password"
          fullWidth
          margin="normal"
          variant="outlined"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          helperText={errors.password ? 'This field is required' : undefined}
          inputRef={register({ required: true })}
          error={!!errors.password}
        />

        <Button variant="contained" color="primary" fullWidth type="submit" disabled={isAuthorizing}>
          Login
        </Button>
      </form>
    </>
  );
};
