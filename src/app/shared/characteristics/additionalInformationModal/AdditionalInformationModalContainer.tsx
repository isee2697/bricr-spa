import React from 'react';
import { useParams } from 'react-router-dom';
import {
  NcpCharacteristicsDocument,
  ObjectTypeCharacteristicsDocument,
  useSetNcpCharacteristicsMutation,
  useSetObjectTypeCharacteristicsSectionsMutation,
} from 'api/types';
import { EntityType } from 'app/shared/entityType';

import {
  AdditionalInformationModalContainerProps,
  AdditionalInformationVisibility,
} from './AdditionalInformationModal.types';
import { AdditionalInformationModal } from './AdditionalInformationModal';

export const AdditionalInformationModalContainer = ({
  sections,
  isOpened,
  onClose,
  availableSections,
  entityType,
}: AdditionalInformationModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [setNcpCharacteristics] = useSetNcpCharacteristicsMutation();
  const [setObjectTypeCharacteristics] = useSetObjectTypeCharacteristicsSectionsMutation();

  const handleSubmit = async (values: AdditionalInformationVisibility) => {
    try {
      if (entityType === EntityType.Project) {
        const { data } = await setNcpCharacteristics({
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
      }

      if (entityType === EntityType.ObjectType) {
        const { data } = await setObjectTypeCharacteristics({
          variables: {
            input: {
              id,
              ...values,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeCharacteristicsDocument,
              variables: { id },
            },
          ],
        });

        if (!data?.setObjectTypeCharacteristicsSections) {
          throw new Error();
        }
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
      onClose={() => onClose()}
      onSubmit={handleSubmit}
      availableSections={availableSections}
    />
  );
};
