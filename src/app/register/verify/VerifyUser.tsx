import React from 'react';
import { Form } from 'react-final-form';

import { VerifyProps } from 'app/register/verify/Verify.types';
import { Alert, Button, Typography } from 'ui/atoms';
import { WarningIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';

export const VerifyUser = ({ name, email, onSubmit, error }: VerifyProps) => {
  const { formatMessage } = useLocale();

  return (
    <Form initialValues={{ email }} onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Typography variant="h1">{`${formatMessage({ id: 'register.verify_account_title' })} ${name}`}</Typography>
          <Typography>{formatMessage({ id: 'register.verify_account_text' })}</Typography>
          {error && (
            <Alert color="error" icon={<WarningIcon />}>
              {error}
            </Alert>
          )}
          {!email && (
            <GenericField
              type="email"
              label="register.email_label"
              placeholder={'register.email_placeholder'}
              required
              name="email"
            />
          )}
          <GenericField label="register.token_label" placeholder="register.token_placeholder" required name="code" />

          <Button type="submit" variant="contained" color="primary">
            {formatMessage({ id: 'common.submit' })}
          </Button>
        </form>
      )}
    </Form>
  );
};
