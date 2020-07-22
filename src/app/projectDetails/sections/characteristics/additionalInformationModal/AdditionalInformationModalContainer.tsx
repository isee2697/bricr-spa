import React from 'react';
import { useParams } from 'react-router-dom';

import { NcpCharacteristicsDocument, useSetNcpCharacteristicsMutation } from 'api/types';

import {
  AdditionalInformationModalContainerProps,
  AdditionalInformationVisibility,
} from './AdditionalInformationModal.types';
import { AdditionalInformationModal } from './AdditionalInformationModal';

export const AdditionalInformationModalContainer = ({
  sections,
  isOpened,
  onClose,
}: AdditionalInformationModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [setCharacteristics] = useSetNcpCharacteristicsMutation();

  const handleSubmit = async (values: AdditionalInformationVisibility) => {
    try {
      const { data } = await setCharacteristics({
        variables: {
          input: {
            id,
            ...values,
          },
        },
        refetchQueries: [
          {
            query: NcpCharacteristicsDocument,
            variables: { id },
          },
        ],
      });

      if (!data?.setNcpCharacteristics) {
        throw new Error();
      }

      onClose(values.sections.filter(section => !sections.includes(section)));

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  const initialValues = {
    sections,
  };

  return (
    <AdditionalInformationModal
      initialValues={initialValues}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
