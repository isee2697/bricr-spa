import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { useUpdateCadastreMutation, usePimCadastreQuery, PimCadastreDocument, CadastreType } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { Plot } from './Plot';

export const PlotContainer = () => {
  const { id, cadastreId } = useParams<{ id: string; cadastreId: string }>();
  const { data: cadastreData } = usePimCadastreQuery({
    variables: { id },
  });

  const cadastre = cadastreData?.getPimCadastre?.cadastre
    ?.filter(cadastre => cadastre.type === CadastreType.Plot)
    ?.reverse()
    ?.map((cadastre, index) => ({ ...cadastre, index: index + 1 }))
    .find(c => c.id === cadastreId);

  const [updateCadastre] = useUpdateCadastreMutation();

  const handleEdit = async (body: AnyObject) => {
    try {
      const { data } = await updateCadastre({
        variables: {
          input: {
            pimId: id,
            id: cadastreId,
            description: body.description,
            plot: {
              ...body,
              surface: Number(body.surface),
              ownershipType: body.ownershipType,
              ownershipChoice: body.ownershipChoice,
              lease: {
                ...body.lease,
                yearlyPrice: body.lease?.yearlyPrice ? parseFloat(body.lease.yearlyPrice) : undefined,
              },
            },
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

  return (
    <AutosaveForm
      key={cadastreId}
      initialValues={cadastre?.plot || undefined}
      onSave={handleEdit}
      mutators={{ ...arrayMutators }}
    >
      <Plot
        cadastre={cadastre}
        index={(cadastreData?.getPimCadastre?.cadastre?.length || 0) > 2 ? cadastre?.index.toString() || '' : ''}
      />
    </AutosaveForm>
  );
};
