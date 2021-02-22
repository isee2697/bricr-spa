import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { MatchProfile, MatchProfileInput, useAddMatchProfileMutation, useUpdateMatchProfileMutation } from 'api/types';

import { CreateNewMatchProfile } from './CreateNewMatchProfile';
import { CreateNewMatchProfileContainerProps } from './CreateNewMatchProfile.types';

export const CreateNewMatchProfileContainer = (props: CreateNewMatchProfileContainerProps) => {
  const [addMatchProfile] = useAddMatchProfileMutation();
  const [updateMatchProfile] = useUpdateMatchProfileMutation();
  const [matchProfile, setMatchProfile] = useState<MatchProfile>();
  const { id } = useParams<{ id: string; matchProfileId?: string }>();

  const handleSubmit = async (values: MatchProfileInput) => {
    try {
      if (!!matchProfile) {
        const { data } = await updateMatchProfile({ variables: { id: matchProfile.id, input: values } });

        if (!data || !data.updateMatchProfile) {
          throw new Error();
        }

        setMatchProfile(data.updateMatchProfile);
      } else {
        const { data } = await addMatchProfile({ variables: { crmId: id, input: values as MatchProfileInput } });

        if (!data || !data.addMatchProfile) {
          throw new Error();
        }

        setMatchProfile(data.addMatchProfile);
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return <CreateNewMatchProfile {...props} matchProfile={matchProfile} onSave={handleSubmit} />;
};
