import React from 'react';

import { GetPimOutsideDocument, PimDetailsDocument, PimOutsideInput, useUpdatePimOutsideInfoMutation } from 'api/types';

import { Main } from './Main';
import { MainContainerProps } from './Main.types';

export const MainContainer = ({ pimOutside }: MainContainerProps) => {
  const [updatePimOutsideInfo] = useUpdatePimOutsideInfoMutation();

  const handleSave = async (values: PimOutsideInput) => {
    try {
      const { data: result } = await updatePimOutsideInfo({
        variables: {
          input: {
            id: pimOutside.id,
            houseOutside: values.houseOutside,
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
            variables: {
              id: pimOutside.id,
            },
          },
          {
            query: GetPimOutsideDocument,
            variables: {
              id: pimOutside.id,
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

  return <Main pimOutside={pimOutside} onSave={handleSave} />;
};
