import React, { useState } from 'react';
import { InspectionType } from 'api/types';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { Page } from 'ui/templates';

import { InspectionType as InspectionTypeComponent } from './inspectionType/InspectionType';
import { InspectionProps } from './Inspection.types';
import { typeToLabelProperty } from './Inspection.helpers';

export const Inspection = ({
  inspections,
  onSave,
  dateUpdated,
  updatedBy,
  description,
  onDescriptionUpdate,
}: InspectionProps) => {
  const { formatMessage } = useLocale();
  const [type, setType] = useState<InspectionType | null>(null);

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
          property={typeToLabelProperty(type)}
          isOpened={!!type}
          onClose={() => setType(null)}
          title={formatMessage({
            id: `pim_details.specification.inspection.custom_${type?.toLowerCase()}_modal_title`,
          })}
          labelId={`pim_details.specification.inspection.custom_${type?.toLowerCase()}_property_name`}
        />
      )}
    </>
  );
};
