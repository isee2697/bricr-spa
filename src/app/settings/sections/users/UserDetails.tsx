import React from 'react';
import arrayMutators from 'final-form-arrays';
import { AutosaveForm } from 'ui/organisms';
import { Page } from 'ui/templates';
import { PhoneNumbersContainer } from 'app/settings/sections/users/forms/phone/PhoneNumbersContainer';
import { SocialLinksContainer } from 'app/settings/sections/users/forms/social/SocialLinksContainer';

import { PersonalInformation } from './forms/PersonalInformation';
import { AdminPermissions } from './forms/AdminPermissions';
import { TeamPermissionsSection } from './forms/TeamPermissionsSection';
import { EmailAddressesContainer } from './forms/email/EmailAddressesContainer';
import { CharacteristicsSection } from './forms/CharacteristicsSection';
import { UserDetailsProps } from './Users.types';

export const UserDetails = ({ data, onSave }: UserDetailsProps) => {
  return (
    <Page titleActions={<></>} showHeader title={`${data.firstName} ${data.lastName}`}>
      <AutosaveForm key={data.id} mutators={{ ...arrayMutators }} onSave={onSave} initialValues={data}>
        <PersonalInformation {...data} />
        <AdminPermissions data={data?.adminSettings ?? []} />
        <TeamPermissionsSection data={data?.teams ?? []} />
        <EmailAddressesContainer data={data.emailAddresses ?? []} />
        <PhoneNumbersContainer data={data.phoneNumbers ?? []} />
        <SocialLinksContainer data={data.socialMediaLinks ?? []} />
        <CharacteristicsSection />
      </AutosaveForm>
    </Page>
  );
};
