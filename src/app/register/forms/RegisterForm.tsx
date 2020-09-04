import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Typography, Button, Box } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from '../../../hooks';

import { RegisterFormProps } from './RegisterForm.types';

export const RegisterForm = ({ isSubmitEnabled, onSubmit, checkSpaceAvailable, spaceName }: RegisterFormProps) => {
  const { formatMessage } = useLocale();
  const [editedSpaceName, setEditedSpaceName] = useState(false);

  const changeSpaceName = (name: string, isEmailField = false) => {
    if (isEmailField && !editedSpaceName) {
      const domainName = name.substring(name.lastIndexOf('@') + 1);
      const domainWithouthExtenstion = domainName.substring(0, domainName.lastIndexOf('.'));

      if (domainWithouthExtenstion.length > 0) {
        checkSpaceAvailable(domainWithouthExtenstion);
      }
    } else if (!isEmailField) {
      setEditedSpaceName(true);
      checkSpaceAvailable(name);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Typography>Claim your bricr space</Typography>
          <GenericField
            required
            label={formatMessage({ id: 'register.name_label' })}
            placeholder={formatMessage({ id: 'register.name_placeholder' })}
            name="name"
          />
          <GenericField
            type="email"
            label={formatMessage({ id: 'register.email_label' })}
            placeholder={formatMessage({ id: 'register.email_placeholder' })}
            onChange={e => changeSpaceName(e.target.value, true)}
            required
            name="email"
          />
          <GenericField
            label={formatMessage({ id: 'register.space_label' })}
            placeholder={formatMessage({ id: 'register.space_placeholder' })}
            required
            value={spaceName}
            onChange={e => changeSpaceName(e.target.value)}
            name="space"
          />
          <Box mb={2} />
          <Typography variant="h5">
            <div dangerouslySetInnerHTML={{ __html: formatMessage({ id: 'register.terms' }) }} />
          </Typography>
          <Button type="submit" disabled={!isSubmitEnabled} variant="contained" color="primary">
            I agree
          </Button>
          <Box mb={2} />
          <Typography variant="h4">{formatMessage({ id: 'register.no_credit_card' })}</Typography>
        </form>
      )}
    </Form>
  );
};
