import React from 'react';
import arrayMutators from 'final-form-arrays';
import { useParams } from 'react-router-dom';
import { AnyObject } from 'final-form';

import { PimDetailsDocument, useUpdateCadastreMutation } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { PlotContainerProps } from './Plot.types';
import { Plot } from './Plot';

export const PlotContainer = ({ plot, ...props }: PlotContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateCadastre] = useUpdateCadastreMutation();

  const handleEdit = async (body: AnyObject) => {
    try {
      const { data } = await updateCadastre({
        variables: {
          input: {
            pimId: id,
            id: plot.id,
            description: body.description,
            // configuration: body.configuration,
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
      key={plot.id}
      initialValues={plot}
      onSave={handleEdit}
      mutators={{ ...arrayMutators }}
      subscription={{}}
    >
      <Plot {...props} />
    </AutosaveForm>
  );
};
