import React from 'react';
import { DateTime } from 'luxon';
import { PimOutsideDocument, PimOverallInfoDocument, useUpdatePimOutsideInfoMutation, PimOutside } from 'api/types';

import { Main } from './Main';
import { MainContainerProps } from './Main.types';

export const MainContainer = ({ pimOutside }: MainContainerProps) => {
  const [updatePimOutsideInfo] = useUpdatePimOutsideInfoMutation();

  const handleSave = async (values: PimOutside) => {
    try {
      const { data: result } = await updatePimOutsideInfo({
        variables: {
          input: {
            id: pimOutside.id,
            houseOutside: {
              ...values.houseOutside,
              generalInformation: {
                ...values.houseOutside?.generalInformation,
                images: values.houseOutside?.generalInformation?.images?.map(file => file.id),
              },
              propertyRelated: {
                ...values.houseOutside?.propertyRelated,
                images: values.houseOutside?.propertyRelated?.images?.map(file => file.id),
              },
              roofInformation: {
                ...values.houseOutside?.roofInformation,
                yearOfRoof: ((values.houseOutside?.roofInformation?.yearOfRoof as unknown) as DateTime)?.year,
                images: values.houseOutside?.roofInformation?.images?.map(file => file.id),
              },
            },
          },
        },
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: { id: pimOutside.id },
          },
          {
            query: PimOutsideDocument,
            variables: { id: pimOutside.id },
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
