import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Typography, Button, Box, Alert } from 'ui/atoms';
import { DropdownField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { BricrPlans } from 'api/types';
import { WarningIcon } from 'ui/atoms/icons';

import { RegisterFormProps } from './RegisterForm.types';
import { PasswordArea } from './PasswordArea';

export const RegisterForm = ({
  isSubmitEnabled,
  onSubmit,
  checkSpaceAvailable,
  spaceName,
  data,
  error,
}: RegisterFormProps) => {
  const { formatMessage } = useLocale();
  const [passwordError, setPasswordError] = useState(false);

  const changeSpaceName = (name: string, isEmailField = false) => {
    if (isEmailField && (!spaceName || spaceName === '')) {
      const domainName = name.substring(name.lastIndexOf('@') + 1);
      const domainWithouthExtension = domainName.substring(0, domainName.lastIndexOf('.'));

      if (domainWithouthExtension.length > 0 && data.space !== domainWithouthExtension) {
        checkSpaceAvailable(domainWithouthExtension);
      }
    } else if (!isEmailField) {
      checkSpaceAvailable(name);
    }
  };

  return (
    <Form initialValues={data} onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Typography>{formatMessage({ id: 'register.claim_space' })}</Typography>
          {error && (
            <Alert color="error" icon={<WarningIcon />}>
              {error}
            </Alert>
          )}
          <GenericField required label={'register.name_label'} placeholder={'register.name_placeholder'} name="name" />
          <GenericField
            type="email"
            label={'register.email_label'}
            placeholder={'register.email_placeholder'}
            onChange={e => changeSpaceName(e.target.value, true)}
            required
            name="email"
          />
          <PasswordArea error={passwordError} setError={err => setPasswordError(err)} />
          <GenericField
            label={'register.space_label'}
            placeholder={'register.space_placeholder'}
            required
            value={spaceName}
            onChange={e => changeSpaceName(e.target.value)}
            name="space"
          />
          <DropdownField
            name="plan"
            label="common.plan.label"
            placeholder="common.plan.placeholder"
            items={Object.values(BricrPlans).map(item => ({
              label: `common.plan.${item.toLowerCase()}`,
              value: item,
            }))}
          />
          <Box mb={2} />
          <Typography variant="h5">
            <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'register.terms' }) }} />
          </Typography>
          <Button type="submit" disabled={!isSubmitEnabled || passwordError} variant="contained" color="primary">
            {formatMessage({ id: 'register.agree' })}
          </Button>
          <Box mb={2} />
          <Typography variant="h4">{formatMessage({ id: 'register.no_credit_card' })}</Typography>
        </form>
      )}
    </Form>
  );
};
