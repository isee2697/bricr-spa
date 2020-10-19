import React from 'react';
import { useParams } from 'react-router-dom';

import { GetUserProfileDocument, Profile, useGetUserProfileQuery, useUpdateProfileMutation } from 'api/types';
import { Loader } from 'ui/atoms';
import { UserDetails } from 'app/settings/sections/users/UserDetails';

export const UserDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data: profile } = useGetUserProfileQuery({ variables: { id }, fetchPolicy: 'no-cache' });
  const [updateProfile] = useUpdateProfileMutation();

  const handleSave = async (update: Profile) => {
    if (!update.email) {
      throw Error();
    }

    try {
      const response = await updateProfile({
        variables: {
          input: {
            id,
            firstName: update.firstName,
            lastName: update.lastName,
            email: update.email,
            functionDescription: update.functionDescription,
            dateOfBirth: update.dateOfBirth,
            gender: update.gender,
            adminSettings: update.adminSettings,
            imageId: update?.image?.id ?? null,
            initials: update?.initials,
            costUnit: update.costUnit,
            hideOnMemos: update.hideOnMemos,
            isAccountmanager: update.isAccountmanager,
            isAdmin: update.isAdmin,
            language: update.language,
          },
        },
        refetchQueries: [{ query: GetUserProfileDocument, variables: { id } }],
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (profile && !!profile.getProfile) {
    return <UserDetails key={id} onSave={handleSave} data={profile.getProfile as Profile} />;
  }

  return <Loader />;
};
