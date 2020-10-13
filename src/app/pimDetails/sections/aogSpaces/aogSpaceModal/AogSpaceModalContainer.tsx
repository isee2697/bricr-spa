import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAddAogSpaceMutation, PimAogSpacesDocument, PimOverallInfoDocument } from 'api/types';
import { AppRoute } from '../../../../../routing/AppRoute.enum';

import { AogSpaceModalContainerProps } from './AogSpaceModal.types';
import { AogSpaceModal } from './AogSpaceModal';

export const AddAogSpaceModalContainer = ({ type, isOpened, onClose }: AogSpaceModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addAogSpace] = useAddAogSpaceMutation();
  const { push } = useHistory();

  const handleSubmit = async (body: { name: string }) => {
    try {
      const { data: result } = await addAogSpace({
        variables: {
          input: {
            id,
            name: body.name || '',
            type: type,
          },
        },
        refetchQueries: [
          {
            query: PimAogSpacesDocument,
            variables: {
              id,
            },
          },
          {
            query: PimOverallInfoDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      if (result.addAogSpace.newSpace?.id) {
        push(`${AppRoute.pimDetails.replace(':id', id)}/${type.toLowerCase()}/${result.addAogSpace.newSpace?.id}`, {
          newlyAdded: true,
        });
      }

      onClose();

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AogSpaceModal type={type} isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
