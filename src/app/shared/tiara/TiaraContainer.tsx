import React from 'react';
import { useParams } from 'react-router-dom';

import { TiaraMessageType, useGetTiaraMutationsQuery, useTiaraSendMessageMutation } from 'api/types';
import { Loader } from 'ui/atoms';

import { Tiara } from './Tiara';
import { TiaraContainerProps } from './Tiara.types';

export const TiaraContainer = (props: TiaraContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { entity } = props;
  const { data } = useGetTiaraMutationsQuery({ variables: { entity, entityId: id } });
  const [tiaraSendMessageMutation] = useTiaraSendMessageMutation();
  const sendMessage = async (messageType: TiaraMessageType) => {
    try {
      await tiaraSendMessageMutation({
        variables: {
          input: { messageType, entity, entityId: id },
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
