import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { CadastreType, useAddCadastreMutation, PimOverallInfoDocument, PimCadastreDocument } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddPlotModalContainerProps } from './AddPlotModal.types';
import { AddPlotModal } from './AddPlotModal';

export const AddPlotModalContainer = ({ isModalOpened, onModalClose }: AddPlotModalContainerProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { push } = useHistory();
  const [addCadastre, { loading }] = useAddCadastreMutation();

  const handleAddPlot = async () => {
    try {
      if (!pimId) {
        throw new Error();
      }

      const { data: addCadastreResponse } = await addCadastre({
        variables: {
          input: {
            pimId,
            description: '',
            type: CadastreType.Plot,
          },
        },
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: { id: pimId },
          },
          {
            query: PimCadastreDocument,
            variables: { id: pimId },
          },
        ],
      });

      if (addCadastreResponse?.addCadastre?.cadastre) {
        const id = addCadastreResponse.addCadastre.cadastre.id;
        push(`${AppRoute.pimDetails.replace(':id', pimId)}/cadastre/${id}`, { newPlotAdded: true });

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
    <AddPlotModal
      handleAddPlot={handleAddPlot}
      isModalOpened={isModalOpened}
      onModalClose={onModalClose}
      loading={loading}
    />
  );
};
