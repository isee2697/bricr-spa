import React from 'react';
import { useParams } from 'react-router-dom';

import { Profile, useGetUserProfileQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { UserDetails } from 'app/settings/sections/users/UserDetails';

export const UserDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data: profile } = useGetUserProfileQuery({ variables: { id } });

  const handleSave = async (update: Profile) => {
    return undefined;
  };

  if (profile && profile.getProfile) {
    return <UserDetails onSave={handleSave} data={profile.getProfile} />;
  }

  return <Loader />;
};
