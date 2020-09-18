import React from 'react';

import { AdminSettings, EmailAddressType, GenderType, PhoneNumberType, SocialMediaLinkType } from 'api/types';
import { LockIcon, UserIcon } from 'ui/atoms/icons';

export const GenderOptions = Object.values(GenderType).map(gender => ({
  label: `dictionaries.gender.${gender}`,
  icon: <LockIcon />,
  value: gender,
}));

export const AdminPermissionsTypes = Object.values(AdminSettings).map(value => ({
  label: `dictionaries.settings.admin_groups.${value}`,
  icon: <UserIcon />,
  value,
}));

export const EmailAddressesTypes = Object.values(EmailAddressType).map(value => ({
  label: `dictionaries.sector.${value}`,
  icon: <UserIcon />,
  value,
}));

export const PhoneNumberTypes = Object.values(PhoneNumberType).map(value => ({
  label: `dictionaries.sector.${value}`,
  icon: <UserIcon />,
  value,
}));

export const SocialTypes = Object.values(SocialMediaLinkType).map(value => ({
  label: `dictionaries.socials.${value}`,
  icon: <UserIcon />,
  value,
}));
