import { useField } from 'react-final-form';
import React from 'react';

import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';

import { PasswordAreaProps } from './RegisterForm.types';

export const PasswordArea = ({ error, setError }: PasswordAreaProps) => {
  const passwordField = useField('password');
  const repeatPasswordField = useField('repeat_password');
  const checkPassword = () => {
    const password = passwordField.input.value;
    const repeated = repeatPasswordField.input.value;

    setError(password && repeated && password !== repeated);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <GenericField
          type="password"
          label="register.password_label"
          placeholder="register.password_placeholder"
          onKeyUp={() => checkPassword()}
          required
          name="password"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <GenericField
          type="password"
          label="register.repeat_password"
          placeholder="register.repeat_password_placeholder"
          onKeyUp={() => checkPassword()}
          required
          error={error}
          name="repeat_password"
          helperText={error && 'common.password.repeat_error'}
        />
      </Grid>
    </Grid>
  );
};
