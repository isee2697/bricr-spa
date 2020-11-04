import React from 'react';
import { useParams } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { TiaraEntities, TiaraMessageType, useGetTiaraMutationsQuery, useTiaraSendMessageMutation } from 'api/types';
import { Loader } from 'ui/atoms';

import { Tiara } from './Tiara';

export const TiaraContainer = (props: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTiaraMutationsQuery({ variables: { entity: TiaraEntities.Pim, entityId: id } });
  const [tiaraSendMessageMutation] = useTiaraSendMessageMutation();
  const sendMessage = async (messageType: TiaraMessageType) => {
    try {
      await tiaraSendMessageMutation({
        variables: {
          input: { messageType, entity: TiaraEntities.Pim, entityId: id },
        },
      });
    } catch {
      return { error: true };
    }
  };

  if (!data?.getTiaraMutations) {
    return <Loader />;
  }

  return <Tiara {...props} mutations={data.getTiaraMutations} sendMessage={sendMessage} />;
};
