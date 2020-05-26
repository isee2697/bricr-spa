import React from 'react';

import { usePim } from 'app/pimDetails/usePim/usePim';
import { useUpdatePimOutsideInfoMutation, PimDetailsDocument, Pim } from 'api/types';

import { Main } from './Main';

export const MainContainer = () => {
  const pim = usePim();

  const [updatePimOutsideInfo] = useUpdatePimOutsideInfoMutation();

  const handleSave = async (values: Pim) => {
    try {
      const { data: result } = await updatePimOutsideInfo({
        variables: {
          input: {
            id: pim.id,
            ...values.houseOutside,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id: pim.id,
            },
          },
        ],
      });

      if (!result || !result.updatePimOutsideInfo) {
        throw new Error();
      }

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return <Main pim={pim} onSave={handleSave} />;
};
