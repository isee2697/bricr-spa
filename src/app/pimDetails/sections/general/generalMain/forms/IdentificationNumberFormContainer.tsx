import React from 'react';
import { useParams } from 'react-router-dom';

import {
  useAddIdentificationNumberMutation,
  useUpdateIdentificationNumberMutation,
  PimGeneralDocument,
  IdentificationNumber,
} from 'api/types';
import { IdentificationNumberForm } from 'app/shared/identificationNumber/IdentificationNumberForm';

export const IdentificationNumberFormContainer = ({ items }: { items: IdentificationNumber[] }) => {
  const { id } = useParams<{ id: string }>();
  const [addIdentificationNumber] = useAddIdentificationNumberMutation();
  const [updateIdentificationNumber] = useUpdateIdentificationNumberMutation();

  const handleAdd = async () => {
    const { data } = await addIdentificationNumber({
      variables: {
        input: {
          pimId: id,
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
      id: data?.addIdentificationNumber.newIdentificationNumber.id,
    };
  };

  const handleSave = async (values: IdentificationNumber) => {
    try {
      const { data: result } = await updateIdentificationNumber({
        variables: {
          input: {
            pimId: id,
            ...values,
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
