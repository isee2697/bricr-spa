import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAddOutsideFeatureMutation, PimOverallInfoDocument, PimOutsideDocument } from 'api/types';

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
            query: PimOverallInfoDocument,
            variables: {
              id,
            },
          },
          {
            query: PimOutsideDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result?.addOutsideFeature || !result.addOutsideFeature.newOutsideFeature) {
        throw new Error();
      }

      onClose();
      push(`${AppRoute.pimDetails.replace(':id', id)}/outside/${result.addOutsideFeature.newOutsideFeature.id}`, {
        newFeatureAdded: true,
      });

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddOutsideFeatureModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};
