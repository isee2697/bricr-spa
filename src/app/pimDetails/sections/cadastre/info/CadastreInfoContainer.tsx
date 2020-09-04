import React from 'react';
import { useParams } from 'react-router-dom';

import { Cadastre, PimCadastreDocument, useUpdateCadastreMutation } from 'api/types';

import { CadastreInfo } from './CadastreInfo';
import { CadastreInfoContainerProps } from './CadastreInfo.types';

export const CadastreInfoContainer = ({ cadastreItem, hasPlots }: CadastreInfoContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCadastre] = useUpdateCadastreMutation();

  if (!cadastreItem) {
    return <></>;
  }

  const handleEdit = async (body: Cadastre) => {
    try {
      const { data } = await updateCadastre({
        variables: {
          input: {
            pimId: id,
            id: cadastreItem.id,
            description: body.description,
          },
        },
        refetchQueries: [
          {
            query: PimCadastreDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!data) {
        throw new Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <CadastreInfo onSave={handleEdit} cadastreItem={cadastreItem} hasPlots={hasPlots} />;
};
