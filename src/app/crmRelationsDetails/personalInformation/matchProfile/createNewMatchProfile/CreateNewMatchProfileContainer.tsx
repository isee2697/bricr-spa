import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  AddMatchProfileInput,
  UpdateMatchProfileInput,
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
  const [currentProfileId, setCurrentProfileId] = useState<string>();

  useEffect(() => {
    const getMatchProfileFunc = async (id: string) => {
      await getMatchProfile({ variables: { id } });
    };

    setCurrentProfileId(matchProfileId);

    if (matchProfileId) {
      getMatchProfileFunc(matchProfileId);
    }
  }, [getMatchProfile, matchProfileId]);

  const handleSubmit = async (values: AddMatchProfileInput | UpdateMatchProfileInput) => {
    try {
      if (!!currentProfileId) {
        const { data: updatedMatchProfile } = await updateMatchProfile({
          variables: { id: currentProfileId, input: values },
        });

        if (!updatedMatchProfile || !updatedMatchProfile.updateMatchProfile) {
          throw new Error();
        }
      } else {
        const { data } = await addMatchProfile({ variables: { input: { ...values, crmId: id } } });

        if (!data || !data.addMatchProfile) {
          throw new Error();
        }

        setCurrentProfileId(data.addMatchProfile.id);
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
