import React from 'react';
import { useParams } from 'react-router';
import arrayMutators from 'final-form-arrays';

import { PimSpecification, usePimSpecificationQuery, useUpdateSpecificationAdvancedMutation } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { Advanced } from './Advanced';

export const AdvancedContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [updateSpecificationAdvanced] = useUpdateSpecificationAdvancedMutation();
  const { data } = usePimSpecificationQuery({ variables: { id } });

  const handleSave = async (values: PimSpecification) => {
    try {
      const { data: result } = await updateSpecificationAdvanced({
        variables: {
          input: {
            pimId: id,
            ...values.specificationAdvanced,
          },
        },
      });

      if (!result || !result.updateSpecificationAdvanced) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data) {
    return null;
  }

  return (
    <AutosaveForm
      initialValues={data?.getPimSpecification || undefined}
      onSave={handleSave}
      subscription={{}}
      mutators={{ ...arrayMutators }}
    >
      <Advanced />
    </AutosaveForm>
  );
};
