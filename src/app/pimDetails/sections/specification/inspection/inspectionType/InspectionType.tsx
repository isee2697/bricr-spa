import React, { useState } from 'react';

import { Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { AddInspectionModalContainer } from '../../addInspectionModal/AddInspectionModalContainer';

import { InspectionTypeProps } from './InspectionType.types';

export const InspectionType = ({ type, emoji, onAddCustomType }: InspectionTypeProps) => {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const { formatMessage } = useLocale();

  return (
    <>
      <FormSection
        title={formatMessage({ id: `pim_details.specification.inspection.type_${type.toLowerCase()}` })}
        isEditable={false}
        onAdd={() => setIsInspectionModalOpen(v => !v)}
      >
        <InfoSection emoji={emoji}>
          <Typography variant="h3">
            {formatMessage({ id: `pim_details.specification.inspection.empty_${type.toLowerCase()}_title` })}
          </Typography>
          <Typography variant="h3">
            {formatMessage({ id: 'pim_details.specification.inspection.empty_description' })}
          </Typography>
        </InfoSection>
      </FormSection>
      <AddInspectionModalContainer
        type={type}
        isOpened={isInspectionModalOpen}
        onClose={() => setIsInspectionModalOpen(false)}
        onAddCustomType={onAddCustomType}
      />
    </>
  );
};
