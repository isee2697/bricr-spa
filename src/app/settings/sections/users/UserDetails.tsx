import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { Page } from 'ui/templates';
import { AppRoute } from 'routing/AppRoute.enum';
import { Grid, NavBreadcrumb } from 'ui/atoms';
import { useLocale } from 'hooks';
import { DatePickerField, GenericField, RadioGroupField, UploadImageField, CheckboxGroupField } from 'form/fields';
import { AdminSettings, EntityWithFiles } from 'api/types';
import { GenderOptions } from 'app/settings/sections/users/dictionaries';
import { FormSubSectionHeader } from 'ui/molecules';
import { UserIcon } from 'ui/atoms/icons';
import { PersonalInformation } from 'app/settings/sections/users/forms/PersonalInformation';
import { AdminPermissions } from 'app/settings/sections/users/forms/AdminPermissions';
import { TeamPermissionsSection } from 'app/settings/sections/users/forms/TeamPermissionsSection';

import { UserDetailsProps } from './Users.types';
import { useStyles } from './User.styles';
export const UserDetails = ({ data, onSave }: UserDetailsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(data?.avatar ?? undefined);

  return (
    <>
      <NavBreadcrumb to={AppRoute.users} title={formatMessage({ id: 'settings.users.title' })} />
      <Page titleActions={<></>} showHeader title={`${data.firstName} ${data.lastName}`}>
        <AutosaveForm key={data.id} mutators={{ ...arrayMutators }} onSave={onSave} initialValues={data}>
          <PersonalInformation {...data} />
          <AdminPermissions />
          <TeamPermissionsSection data={data?.teams ?? []} />
        </AutosaveForm>
      </Page>
    </>
  );
};
