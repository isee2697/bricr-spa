import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';

import { useNcpGeneralQuery, useUpdateNcpMutation, NcpGeneralDocument, NcpGeneral } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { General } from './General';

export const GeneralContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useNcpGeneralQuery({ variables: { id } });
  const [updateNcpGeneral] = useUpdateNcpMutation();

  const handleSave = async ({ archived, ...values }: NcpGeneral) => {
    try {
      const { data } = await updateNcpGeneral({
        variables: {
          input: {
            ...values,
            objectTypes: parseInt(values.objectTypes?.toString() ?? '') || null,
            properties: parseInt(values.properties?.toString() ?? '') || null,
            startConstructionAfterPresalePercentage:
              parseInt(values.startConstructionAfterPresalePercentage?.toString() ?? '') || null,
          },
        },
        refetchQueries: [
          {
            query: NcpGeneralDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.updateNcp) {
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

  const initialValues = {
    ...data.getNcp,
    type: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    lastEditedBy: undefined,
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleSave} mutators={{ ...arrayMutators }}>
      <General data={data.getNcp} />
    </AutosaveForm>
  );
};
