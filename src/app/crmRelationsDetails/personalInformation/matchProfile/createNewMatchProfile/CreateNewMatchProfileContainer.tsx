import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  MatchProfileInput,
  useAddMatchProfileMutation,
  useGetMatchProfileLazyQuery,
  useUpdateMatchProfileMutation,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { CreateNewMatchProfile } from './CreateNewMatchProfile';
import { CreateNewMatchProfileContainerProps } from './CreateNewMatchProfile.types';

export const CreateNewMatchProfileContainer = (props: CreateNewMatchProfileContainerProps) => {
  const [addMatchProfile] = useAddMatchProfileMutation();
  const [updateMatchProfile] = useUpdateMatchProfileMutation();
  const [getMatchProfile, { data, loading }] = useGetMatchProfileLazyQuery();
  const { id, matchProfileId } = useParams<{ id: string; matchProfileId?: string }>();

  useEffect(() => {
    const getMatchProfileFunc = async (id: string) => {
      await getMatchProfile({ variables: { id } });
    };

    if (matchProfileId) {
      getMatchProfileFunc(matchProfileId);
    }
  }, [getMatchProfile, matchProfileId]);

  const handleSubmit = async (values: MatchProfileInput) => {
    try {
      if (!!matchProfileId) {
        const { data } = await updateMatchProfile({ variables: { id: matchProfileId, input: values } });

        if (!data || !data.updateMatchProfile) {
          throw new Error();
        }
      } else {
        const { data } = await addMatchProfile({ variables: { crmId: id, input: values as MatchProfileInput } });

        if (!data || !data.addMatchProfile) {
          throw new Error();
        }
      }

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  if (matchProfileId && loading) {
    return <Loader />;
  }

  return <CreateNewMatchProfile {...props} matchProfile={data?.getMatchProfile || undefined} onSave={handleSubmit} />;
};
