import React from 'react';
import { useParams } from 'react-router-dom';

import {
  IdentificationNumber,
  NcpCharacteristicsDocument,
  useAddIdentificationNumberNcpMutation,
  useUpdateIdentificationNumberNcpMutation,
} from 'api/types';
import { IdentificationNumberForm } from 'app/shared/identificationNumber/IdentificationNumberForm';

export const IdentificationNumberFormContainer = ({ items }: { items: IdentificationNumber[] }) => {
  const { id } = useParams<{ id: string }>();
  const [addIdentificationNumber] = useAddIdentificationNumberNcpMutation();
  const [updateIdentificationNumber] = useUpdateIdentificationNumberNcpMutation();

  const handleAdd = async () => {
    const { data } = await addIdentificationNumber({
      variables: {
        input: {
          parentId: id,
        },
      },
      refetchQueries: [
        {
          query: NcpCharacteristicsDocument,
          variables: {
            id: id,
          },
        },
      ],
    });

    return {
      id: data?.addIdentificationNumberNcp.newIdentificationNumber.id,
    };
  };

  const handleSave = async (values: IdentificationNumber) => {
    try {
      const { data: result } = await updateIdentificationNumber({
        variables: {
          input: {
            id: values.id,
            name: values.name,
            number: values.number,
            type: values.type,
          },
        },
        refetchQueries: [
          {
            query: NcpCharacteristicsDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return <IdentificationNumberForm items={items} onAdd={handleAdd} onSave={handleSave} />;
};
