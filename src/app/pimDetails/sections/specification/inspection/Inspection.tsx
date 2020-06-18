import React from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';
import { MenuIcon, WarningIcon } from 'ui/atoms/icons';
import { AutosaveForm } from '../../../../../ui/organisms';

import { useStyles } from './Inspection.styles';
import { InspectionType } from './inspectionType/InspectionType';
import { InspectionProps } from './Inspection.types';

export const Inspection = ({ onAddCustomType }: InspectionProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
      <Grid xs={12} item>
        <Typography className={classes.title} variant="h1">
          {formatMessage({ id: 'pim_details.specification.inspection.title' })}
        </Typography>
        <div className={classes.iconsHolder}>
          <WarningIcon />
          <MenuIcon />
        </div>
        <GenericField
          placeholder="pim_details.specification.inspection.description_placeholder"
          name="inspection.description"
        />
      </Grid>
      <Grid xs={12} item>
        <InspectionType emoji="🛢" type="Tank" onAddCustomType={onAddCustomType} />
      </Grid>
      <Grid xs={12} item>
        <InspectionType emoji="☣" type="Pollution" onAddCustomType={onAddCustomType} />
      </Grid>
      <Grid xs={12} item>
        <InspectionType emoji="🛠" type="Maintenance" onAddCustomType={onAddCustomType} />
      </Grid>
    </AutosaveForm>
  );
};
