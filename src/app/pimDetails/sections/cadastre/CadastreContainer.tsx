import React from 'react';
import { useHistory } from 'react-router-dom';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { useAddCadastreMutation, CadastreType, PimDetailsDocument } from 'api/types';
import { AppRoute } from 'routing/AppRoute.enum';

import { Cadastre } from './Cadastre';

export const CadastreContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const [addCadastre, { loading }] = useAddCadastreMutation();
  const { push } = useHistory();

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

  const handleSave = () => Promise.resolve({ error: false });

  if (!pim) {
    return null;
  }

  return (
    <Cadastre
      isSidebarVisible={isSidebarVisible}
      onOpenSidebar={onOpenSidebar}
      title={title}
      pim={pim}
      onSave={handleSave}
      onAddPlot={handleAddPlot}
      isAddPlotSubmitting={loading}
    />
  );
};
