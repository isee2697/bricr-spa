import React from 'react';

import { useUpdatePimGeneralInfoMutation, PimGeneralDocument } from 'api/types';

import {
  AdditionalInformationModalContainerProps,
  AdditionalInformationVisibility,
} from './AdditionalInformationModal.types';
import { AdditionalInformationModal } from './AdditionalInformationModal';

export const AdditionalInformationModalContainer = ({
  pimGeneral,
  isOpened,
  onClose,
}: AdditionalInformationModalContainerProps) => {
  const [updatePimGeneralInfo] = useUpdatePimGeneralInfoMutation();

  const handleSubmit = async (values: AdditionalInformationVisibility) => {
    const data = {
      showExtraAddress: values.visibility.includes('showExtraAddress'),
      showIdentificationNumber: values.visibility.includes('showIdentificationNumber'),
    };

    try {
      const { data: result } = await updatePimGeneralInfo({
        variables: {
          input: {
            ...pimGeneral,
            ...data,
          },
        },
        refetchQueries: [
          {
            query: PimGeneralDocument,
            variables: {
              id: pimGeneral.id,
            },
          },
        ],
      });

      if (!result || !result.updatePimGeneralInfo) {
        throw new Error();
      }

      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const initialValues = {
    visibility: [
      pimGeneral.showExtraAddress && 'showExtraAddress',
      pimGeneral.showIdentificationNumber && 'showIdentificationNumber',
    ].filter(Boolean),
  } as AdditionalInformationVisibility;

  return (
    <AdditionalInformationModal
      initialValues={initialValues}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
