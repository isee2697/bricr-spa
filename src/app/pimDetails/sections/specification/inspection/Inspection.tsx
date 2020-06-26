import React, { useState } from 'react';

import { InspectionType, LabelProperty } from 'api/types';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { Page } from 'ui/templates';

import { InspectionType as InspectionTypeComponent } from './inspectionType/InspectionType';
import { InspectionProps } from './Inspection.types';

export const Inspection = ({ inspections, onSave, dateUpdated, updatedBy }: InspectionProps) => {
  const { formatMessage } = useLocale();

  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Page
        title={formatMessage({ id: 'pim_details.specification.inspection.title' })}
        placeholder="pim_details.specification.description_placeholder"
        name="specification.description"
        onSave={() => Promise.resolve(undefined)}
        dateUpdated={dateUpdated}
        updatedBy={updatedBy}
      >
        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="🛢"
            type={InspectionType.Tanks}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Tanks)}
            onSave={onSave}
            onAddCustomType={() => setModalOpened(true)}
          />
        </Grid>

        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="☣"
            type={InspectionType.Pollution}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Pollution)}
            onSave={onSave}
            onAddCustomType={() => setModalOpened(true)}
          />
        </Grid>

        <Grid xs={12} item>
          <InspectionTypeComponent
            emoji="🛠"
            type={InspectionType.Maintenance}
            inspections={inspections.filter(({ inspectionType }) => inspectionType === InspectionType.Maintenance)}
            onSave={onSave}
            onAddCustomType={() => setModalOpened(true)}
          />
        </Grid>
      </Page>
      {isModalOpened && (
        <AddCustomPropertyModalContainer
          property={LabelProperty.Inspection}
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};
