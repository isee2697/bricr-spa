import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PimOverallInfoDocument, useAddBogSpaceMutation, PimBogSpacesDocument } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';
import { AddCommercialSpaceInput, AddCommercialSpaceModalContainerProps } from '../CommercialSpaces.types';

import { AddCommercialSpaceModal } from './AddCommercialSpaceModal';

export const AddCommercialSpaceModalContainer = ({
  isModalOpen,
  onModalClose,
}: AddCommercialSpaceModalContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { push } = useHistory();
  const [addCommercialSpace] = useAddBogSpaceMutation();

  const handleAddCommercialSpace = async ({ name, type }: AddCommercialSpaceInput) => {
    try {
      if (!pimId) {
        throw new Error();
      }

      const { data: addCommercialSpaceResponse } = await addCommercialSpace({
        variables: {
          input: {
            id: pimId,
            name,
            type,
          },
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: { id: pimId },
          },
          {
            query: PimBogSpacesDocument,
            variables: { id: pimId },
          },
        ],
      });

      onModalClose();

      if (addCommercialSpaceResponse && addCommercialSpaceResponse.addBogSpace) {
        const id = addCommercialSpaceResponse.addBogSpace.newSpace.id;

        push(AppRoute.pimDetails.replace(':id', pimId) + '/commercialspaces/' + id);

        return undefined;
      }

      throw new Error();
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return (
    <AddCommercialSpaceModal
      isModalOpen={isModalOpen}
      onModalClose={onModalClose}
      onModalSubmit={handleAddCommercialSpace}
    />
  );
};
