import React from 'react';
import { useParams } from 'react-router-dom';

import {
  usePimGeneralQuery,
  useUpdatePimGeneralInfoMutation,
  PimOverallInfoDocument,
  PimGeneralDocument,
  PimGeneral,
} from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { GeneralMain } from './GeneralMain';

export const GeneralMainContainer = ({ title, isSidebarVisible, onSidebarOpen }: PimDetailsSectionProps) => {
  const { id } = useParams<{ id: string }>();

  const { data } = usePimGeneralQuery({ variables: { id } });
  const [updatePimGeneralInfo] = useUpdatePimGeneralInfoMutation();

  const handleSave = async (values: PimGeneral) => {
    try {
      const { data: result } = await updatePimGeneralInfo({
        variables: {
          input: {
            id: values.id,
            street: values.street,
            city: values.city,
            houseNumber: values.houseNumber,
            postalCode: values.postalCode,
            country: values.country,
            houseGeneral: values.houseGeneral,
            extraAddress: values.extraAddress,
            attentionNote: values.attentionNote,
            apartmentGeneral: values.apartmentGeneral,
            bogGeneral: values.bogGeneral,
            aogGeneral: values.aogGeneral,
            parkingGeneral: values.parkingGeneral,
            buildingPlotGeneral: values.buildingPlotGeneral,
          },
        },
        refetchQueries: [
          {
            query: PimOverallInfoDocument,
            variables: {
              id,
            },
          },
          {
            query: PimGeneralDocument,
            variables: {
              id,
            },
          },
        ],
      });

      if (!result || !result.updatePimGeneralInfo) {
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
    <GeneralMain
      isSidebarVisible={isSidebarVisible}
      onSidebarOpen={onSidebarOpen}
      title={title}
      pimGeneral={data.getPimGeneral as PimGeneral}
      onSave={handleSave}
    />
  );
};
