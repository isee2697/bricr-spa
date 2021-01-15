import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Alert, Box, Button, Typography } from 'ui/atoms';
import { WarningIcon } from 'ui/atoms/icons';
import { DropdownField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { PasswordArea } from 'app/register/forms/PasswordArea';
import { BricrPlans } from 'api/types';

import { ConfirmInviteProps } from './ConfirmInvite.types';

export const ConfirmInvite = ({ onSubmit, error }: ConfirmInviteProps) => {
  const { formatMessage } = useLocale();
  const [passwordError, setPasswordError] = useState(false);

  return (
    <Form onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Typography>{formatMessage({ id: 'register.confirm_invite' })}</Typography>
          {error && (
            <Alert color="error" icon={<WarningIcon />}>
              {error}
            </Alert>
          )}
          <GenericField
            required
            label={'register.name_label'}
            placeholder={'register.name_placeholder'}
            name="firstName"
          />
          <GenericField
            required
            label={'register.name_label'}
            placeholder={'register.name_placeholder'}
            name="lastName"
          />

          <PasswordArea error={passwordError} setError={err => setPasswordError(err)} />

          <Box mb={2} />

          <Button type="submit" disabled={passwordError} variant="contained" color="primary">
            {formatMessage({ id: 'common.submit' })}
          </Button>
        </form>
      )}
    </Form>
  );
};
