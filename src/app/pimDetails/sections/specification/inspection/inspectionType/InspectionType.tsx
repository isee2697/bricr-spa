import React, { useState } from 'react';

import { Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { FormSection, FormSubSection, AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddInspectionModalContainer } from '../addInspectionModal/AddInspectionModalContainer';

import { InspectionTypeProps } from './InspectionType.types';

export const InspectionType = ({ type, emoji, inspections, onSave, onAddCustomType }: InspectionTypeProps) => {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const { formatMessage } = useLocale();

  return (
    <>
      <FormSection
        title={formatMessage({ id: `pim_details.specification.inspection.type_${type.toLowerCase()}` })}
        titleBadge={inspections.length || undefined}
        isEditable
        onAdd={() => setIsInspectionModalOpen(v => !v)}
      >
        {inEditMode => (
          <>
            {!inspections.length && (
              <InfoSection emoji={emoji}>
                <Typography variant="h3">
                  {formatMessage({ id: `pim_details.specification.inspection.empty_${type.toLowerCase()}_title` })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: 'pim_details.specification.inspection.empty_description' })}
                </Typography>
              </InfoSection>
            )}
            {!!inspections.length &&
              inspections.map((inspection, index) => (
                <FormSubSection
                  key={inspection.id}
                  title={formatMessage({
                    id: `dictionaries.inspection_${inspection.inspectionType.toLowerCase()}.${inspection.type}`,
                  })}
                  counter={index + 1}
                  onOptionsClick={() => {}}
                >
                  <AutosaveForm
                    initialValues={{
                      id: inspection.id,
                      description: inspection.description,
                    }}
                    onSave={onSave}
                  >
                    <GenericField
                      name="description"
                      label="pim_details.specification.inspection.title"
                      placeholder="pim_details.specification.inspection.info_placeholder"
                      disabled={!inEditMode}
                    />
                  </AutosaveForm>
                  <Box mb={3} />
                </FormSubSection>
              ))}
          </>
        )}
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
