import React from 'react';
import { useHistory } from 'react-router-dom';

import { CadastreType, PimDetailsDocument, useAddCadastreMutation } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddPlotModalContainerProps } from './AddPlotModal.types';
import { AddPlotModal } from './AddPlotModal';

export const AddPlotModalContainer = ({ pim, isModalOpened, onModalClose }: AddPlotModalContainerProps) => {
  const { push } = useHistory();
  const [addCadastre, { loading }] = useAddCadastreMutation();

  const handleAddPlot = async () => {
    try {
      if (!pim || !pim.id) {
        throw new Error();
      }

      const { data: addCadastreResponse } = await addCadastre({
        variables: {
          input: {
            pimId: pim.id,
            description: '',
            type: CadastreType.Plot,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id: pim.id,
            },
          },
        ],
      });

      if (addCadastreResponse && addCadastreResponse.addCadastre && addCadastreResponse.addCadastre.cadastre) {
        const cadastre = addCadastreResponse.addCadastre.cadastre;
        const id = cadastre[cadastre.length - 1].id;
        push(AppRoute.pimDetails.replace(':id', pim.id) + '/cadastre/' + id);

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
