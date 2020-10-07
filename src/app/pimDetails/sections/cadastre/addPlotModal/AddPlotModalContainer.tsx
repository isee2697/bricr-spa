import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEntityType } from 'app/shared/entityType';
import { CadastreType, useAddCadastreMutation, PimOverallInfoDocument, PimCadastreDocument } from 'api/types';
import { joinUrlParams } from 'routing/AppRoute.utils';

import { AddPlotModalContainerProps } from './AddPlotModal.types';
import { AddPlotModal } from './AddPlotModal';

export const AddPlotModalContainer = ({ isModalOpened, onModalClose }: AddPlotModalContainerProps) => {
  const urlParams = useParams<{ id: string; projectId: string; objectTypeId: string }>();
  const { push } = useHistory();
  const [addCadastre, { loading }] = useAddCadastreMutation();
  const { baseUrl } = useEntityType();

  const handleAddPlot = async () => {
    try {
      if (!urlParams.id) {
        throw new Error();
      }

      const { data: addCadastreResponse } = await addCadastre({
        variables: {
          input: {
            pimId: urlParams.id,
            description: '',
            type: CadastreType.Plot,
          },
        },
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: { id: urlParams.id },
          },
          {
            query: PimCadastreDocument,
            variables: { id: urlParams.id },
          },
        ],
      });

      if (addCadastreResponse?.addCadastre?.cadastre) {
        const id = addCadastreResponse.addCadastre.cadastre.id;
        push(`${joinUrlParams(baseUrl, urlParams)}/cadastre/${id}`, { newPlotAdded: true });

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
