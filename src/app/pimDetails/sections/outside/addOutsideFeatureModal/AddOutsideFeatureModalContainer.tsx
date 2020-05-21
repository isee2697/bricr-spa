import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { useAddOutsideFeatureMutation, PimDetailsDocument } from 'api/types';

import { AddOutsideFeatureModal } from './AddOutsideFeatureModal';
import { AddOutsideFeatureSubmit, AddOutsideFeatureModalContainerProps } from './AddOutsideFeatureModal.types';

export const AddOutsideFeatureModalContainer = ({ isOpened, onClose }: AddOutsideFeatureModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [addOutsideFeature] = useAddOutsideFeatureMutation();
  const { push } = useHistory();

  const handleSubmit: AddOutsideFeatureSubmit = async ({ type, description }) => {
    try {
      const { data: result } = await addOutsideFeature({
        variables: {
          input: {
            pimId: id,
            type,
            description,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result?.addOutsideFeature || !result.addOutsideFeature.outsideFeatures) {
        throw new Error();
      }

      onClose();

      const outsideFeatures = result.addOutsideFeature.outsideFeatures;
      push(`${AppRoute.pimDetails.replace(':id', id)}/outside/${outsideFeatures[0].id}`);

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddOutsideFeatureModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
