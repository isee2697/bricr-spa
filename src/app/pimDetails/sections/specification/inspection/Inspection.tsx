import React, { useState } from 'react';

import { InspectionType, LabelProperty } from 'api/types';
import { Grid, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { AddCustomPropertyModalContainer } from 'ui/organisms';

import { useStyles } from './Inspection.styles';
import { InspectionType as InspectionTypeComponent } from './inspectionType/InspectionType';
import { InspectionProps } from './Inspection.types';

export const Inspection = ({ inspections, onSave }: InspectionProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Grid xs={12} item>
        <Box display="flex" justifyContent="space-between">
          <Typography className={classes.title} variant="h1">
            {formatMessage({ id: 'pim_details.specification.inspection.title' })}
          </Typography>
          <div className={classes.iconsHolder}>
            <WarningIcon />
            <MenuIcon />
          </div>
        </Box>
      </Grid>

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
