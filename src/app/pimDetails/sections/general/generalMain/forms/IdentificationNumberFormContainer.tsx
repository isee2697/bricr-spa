import React from 'react';
import { useParams } from 'react-router-dom';

import {
  PimGeneralDocument,
  IdentificationNumber,
  useAddIdentificationNumberPimMutation,
  useUpdateIdentificationNumberPimMutation,
} from 'api/types';
import { IdentificationNumberForm } from 'app/shared/identificationNumber/IdentificationNumberForm';

export const IdentificationNumberFormContainer = ({ items }: { items: IdentificationNumber[] }) => {
  const { id } = useParams<{ id: string }>();
  const [addIdentificationNumber] = useAddIdentificationNumberPimMutation();
  const [updateIdentificationNumber] = useUpdateIdentificationNumberPimMutation();

  const handleAdd = async () => {
    const { data } = await addIdentificationNumber({
      variables: {
        input: {
          parentId: id,
        },
      },
      refetchQueries: [
        {
          query: PimGeneralDocument,
          variables: {
            id: id,
          },
        },
      ],
    });

    return {
      id: data?.addIdentificationNumberPim.newIdentificationNumber.id,
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
            query: PimGeneralDocument,
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
