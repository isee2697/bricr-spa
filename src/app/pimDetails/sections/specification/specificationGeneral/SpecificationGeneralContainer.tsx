import React from 'react';
import { useParams } from 'react-router';
import arrayMutators from 'final-form-arrays';

import { ObligationFormProps } from '../forms/obligation/ObligationForm.types';
import { PimSpecification, usePimSpecificationQuery, useUpdateSpecificationMutation } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { SpecificationGeneral } from './SpecificationGeneral';

export const SpecificationGeneralContainer = ({ onAddPropertyClick }: ObligationFormProps) => {
  const { id } = useParams<{ id: string }>();

  const [updateSpecification] = useUpdateSpecificationMutation();

  const { data } = usePimSpecificationQuery({ variables: { id } });

  const handleSave = async (values: PimSpecification) => {
    try {
      const { data: result } = await updateSpecification({
        variables: {
          input: {
            pimId: id,
            ...values.specification,
          },
        },
      });

      if (!result || !result.updateSpecification) {
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
      <SpecificationGeneral onAddPropertyClick={onAddPropertyClick} />
    </AutosaveForm>
  );
};
