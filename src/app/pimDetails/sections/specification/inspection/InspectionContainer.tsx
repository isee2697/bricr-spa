import React from 'react';
import { useParams } from 'react-router-dom';

import {
  usePimSpecificationQuery,
  useUpdateInspectionMutation,
  UpdateInspectionInput,
  useUpdateDescriptionMutation,
  SectionWithDescriptionType,
  PimSpecificationDocument,
} from 'api/types';

import { Inspection } from './Inspection';

export const InspectionContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = usePimSpecificationQuery({ variables: { id } });

  const [updateInspection] = useUpdateInspectionMutation();
  const [updateDescription] = useUpdateDescriptionMutation();

  const onDescriptionUpdate = async (body: { description: string }) => {
    try {
      updateDescription({
        variables: {
          input: {
            ...body,
            pimId: id,
            section: SectionWithDescriptionType.Inspection,
          },
        },
        refetchQueries: [
          {
            query: PimSpecificationDocument,
            variables: {
              id,
            },
          },
        ],
      });

      return undefined;
    } catch {
      return { error: true };
    }
  };

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

  if (!data) return null;

  return (
    <Inspection
      inspections={data.getPimSpecification.inspections ?? []}
      onSave={handleSave}
      dateUpdated={data?.getPimSpecification.inspectionsDateUpdated}
      updatedBy={data?.getPimSpecification.inspectionsLastEditedBy}
      description={data?.getPimSpecification.inspectionsDescription ?? ''}
      onDescriptionUpdate={onDescriptionUpdate}
    />
  );
};
