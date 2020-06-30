import React, { useState } from 'react';

import { InspectionType, LabelProperty } from 'api/types';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { Page } from 'ui/templates';

import { InspectionType as InspectionTypeComponent } from './inspectionType/InspectionType';
import { InspectionProps } from './Inspection.types';

export const Inspection = ({
  inspections,
  onSave,
  dateUpdated,
  updatedBy,
  description,
  onDescriptionUpdate,
}: InspectionProps) => {
  const { formatMessage } = useLocale();
  const [type, setType] = useState();

  return (
    <>
      <Page
        title={formatMessage({ id: 'pim_details.specification.inspection.title' })}
        placeholder="pim_details.specification.description_placeholder"
        name="description"
        initialValues={{ description }}
        onSave={onDescriptionUpdate}
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="🛢"
            type={InspectionType.Tanks}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Tanks)}
            onSave={onSave}
            onAddCustomType={() => {
              setType(InspectionType.Tanks);
            }}
          />
        </Grid>

        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="☣"
            type={InspectionType.Pollution}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Pollution)}
            onSave={onSave}
            onAddCustomType={() => {
              setType(InspectionType.Pollution);
            }}
          />
        </Grid>

        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="🛠"
            type={InspectionType.Maintenance}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Maintenance)}
            onSave={onSave}
            onAddCustomType={() => {
              setType(InspectionType.Maintenance);
            }}
          />
        </Grid>
      </Page>
      {!!type && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.Inspection}
          isOpened={!!type}
          onClose={() => setType(null)}
          type={type}
        />
      )}
    </>
  );
};
