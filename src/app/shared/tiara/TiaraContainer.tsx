import React from 'react';
import { useParams } from 'react-router-dom';

import {
  TiaraMessageType,
  useGetTiaraMutationsQuery,
  useGetTiaraValidationQuery,
  useTiaraSendMessageMutation,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { Tiara } from './Tiara';
import { TiaraContainerProps } from './Tiara.types';

export const TiaraContainer = (props: TiaraContainerProps) => {
  const { id: entityId } = useParams<{ id: string }>();
  const { entity } = props;
  const { data: mutations } = useGetTiaraMutationsQuery({ variables: { entity, entityId } });
  const { data: validation } = useGetTiaraValidationQuery({ variables: { entity, entityId } });
  const [tiaraSendMessageMutation] = useTiaraSendMessageMutation();
  const sendMessage = async (messageType: TiaraMessageType) => {
    try {
      await tiaraSendMessageMutation({
        variables: {
          input: { messageType, entity, entityId },
        },
      });
    } catch {
      return { error: true };
    }
  };

  if (!mutations?.getTiaraMutations || !validation?.getTiaraValidation) {
    return <Loader />;
  }

  return (
    <Tiara
      {...props}
      mutations={mutations.getTiaraMutations}
      validation={validation.getTiaraValidation}
      sendMessage={sendMessage}
    />
  );
};

export default TiaraContainer;
