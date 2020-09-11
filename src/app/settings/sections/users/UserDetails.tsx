import React from 'react';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';

import { UserDetailsProps } from './Users.types';

export const UserDetails = ({ data, onSave }: UserDetailsProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm key={data.id} onSave={onSave}>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.users.title' })} />

      <Page titleActions={<></>} showHeader title={data.firstName ?? ''}>
        <FormSection title={'personal information'}>{isEditing => <></>}</FormSection>
      </Page>
    </AutosaveForm>
  );
};
