import React from 'react';
import { AnyObject } from 'final-form';
import { useParams } from 'react-router-dom';

import { useUpdatePimGeneralInfoMutation, PimDetailsDocument } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

import { General } from './General';

export const GeneralContainer = ({ title, isSidebarVisible, onOpenSidebar, pim }: PimDetailsSectionProps) => {
  const [updatePimGeneralInfo] = useUpdatePimGeneralInfoMutation();
  const { id } = useParams<{ id: string }>();

  const handleSave = async (values: AnyObject) => {
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
          },
        },
        refetchQueries: [
          {
            query: PimDetailsDocument,
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

  if (!pim) {
    return null;
  }

  return (
    <General
      isSidebarVisible={isSidebarVisible}
      onOpenSidebar={onOpenSidebar}
      title={title}
      pim={pim}
      onSave={handleSave}
    />
  );
};
