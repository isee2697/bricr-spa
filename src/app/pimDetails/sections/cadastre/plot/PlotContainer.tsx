import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { useUpdateCadastreMutation, usePimCadastreQuery, PimCadastreDocument } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { Plot } from './Plot';

export const PlotContainer = () => {
  const { id, cadastreId } = useParams<{ id: string; cadastreId: string }>();
  const { data: cadastreData } = usePimCadastreQuery({
    variables: { id },
  });

  const cadastre = cadastreData?.getPimCadastre?.cadastre?.find(c => c.id === cadastreId)?.plot || undefined;

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
              ownership: {
                stressedInChargeOf: body.ownership.stressedInChargeOf,
              },
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
      key={id}
      initialValues={cadastre}
      onSave={handleEdit}
      mutators={{ ...arrayMutators }}
      subscription={{}}
    >
      <Plot name={cadastre?.name || ''} />
    </AutosaveForm>
  );
};
