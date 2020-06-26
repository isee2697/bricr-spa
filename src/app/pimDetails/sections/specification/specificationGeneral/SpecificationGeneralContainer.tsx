import React from 'react';
import { useParams } from 'react-router';
import arrayMutators from 'final-form-arrays';

import {
  PimSpecification,
  PimSpecificationDocument,
  usePimSpecificationQuery,
  useUpdateSpecificationMutation,
} from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { SpecificationGeneral } from './SpecificationGeneral';

export const SpecificationGeneralContainer = () => {
  const { id } = useParams<{ id: string }>();

  const [updateSpecification] = useUpdateSpecificationMutation();

  const { data } = usePimSpecificationQuery({ variables: { id } });

  const handleSave = async (values: PimSpecification) => {
    try {
      const { data: result } = await updateSpecification({
        variables: {
          input: {
            pimId: id,
            energy: values.specification?.energy,
            approvals: values.specification?.approvals,
            obligation: values.specification?.obligation,
            description: values.specification?.description,
          },
        },
        refetchQueries: [
          {
            query: PimSpecificationDocument,
            variables: {
              id: id,
            },
          },
        ],
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
      mutators={{ ...arrayMutators }}
    >
      <SpecificationGeneral
        dateUpdated={data?.getPimSpecification?.specification?.dateUpdated}
        updatedBy={data?.getPimSpecification?.specification?.lastEditedBy}
      />
    </AutosaveForm>
  );
};
