import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { AccountManager } from '../accountManager/AccountManager';

import { FormProps } from './Forms.types';

const ACCOUNT_MANAGER = {
  name: 'Victor Martin Brochner',
  office: ['Vestiging Weert', 'Hendriks Makelaardij'],
  phone: '06-48764044',
  email: 'christian@cubiceyes.com',
  image: {
    url: 'http://placeimg.com/168/141/arch',
  },
};

export const AccountManagers = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.account_managers.title' })}
      isEditable
      isExpandable
      onAdd={() => {}}
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AccountManager inEditMode={inEditMode} account={ACCOUNT_MANAGER} onEdit={() => {}} />
          </Grid>
          <Grid item xs={12}>
            <AccountManager inEditMode={inEditMode} account={ACCOUNT_MANAGER} onEdit={() => {}} />
          </Grid>
        </Grid>
      )}
    </FormSection>
  );
};
