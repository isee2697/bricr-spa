import React from 'react';
import { useParams } from 'react-router-dom';

import { usePimSpecificationQuery, useUpdateInspectionMutation, UpdateInspectionInput } from 'api/types';

import { InspectionContainerProps } from './Inspection.types';
import { Inspection } from './Inspection';

export const InspectionContainer = ({ onAddCustomType }: InspectionContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimSpecificationQuery({ variables: { id } });

  const [updateInspection] = useUpdateInspectionMutation();

  const handleSave = async (values: UpdateInspectionInput) => {
    try {
      const { data: result } = await updateInspection({
        variables: {
          input: values,
        },
      });

      if (!result || !result.updateInspection) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  if (!data?.getPimSpecification.inspections) {
    return null;
  }

  return (
    <Inspection
      inspections={data.getPimSpecification.inspections}
      onSave={handleSave}
      onAddCustomType={onAddCustomType}
    />
  );
};
