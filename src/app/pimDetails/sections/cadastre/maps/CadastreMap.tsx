import React from 'react';

import { SubSectionHeader } from 'ui/molecules';
import { Grid, Collapse, ImageHolder, LastUpdated, Box } from 'ui/atoms';
import { GenericField } from 'form/fields';

import { MapProps } from './CadastralMaps.types';
import { useStyles } from './CadsatralMaps.styles';

export const CadastreMap = ({ cadastreMap, title, isEditMode, toggled, onToggleClick }: MapProps) => {
  const classes = useStyles();

  return (
    <>
      <SubSectionHeader onOptionsClick={() => {}} onToggleClick={onToggleClick} toggled={toggled}>
        <Grid container alignItems="center">
          {title}
        </Grid>
      </SubSectionHeader>
      <Collapse in={toggled}>
        <Grid className={classes.content} container spacing={9}>
          <Grid item md={5}>
            <ImageHolder withBorder src={!!cadastreMap.file ? cadastreMap.file : undefined} />
          </Grid>
          <Grid item md={7}>
            <GenericField
              disabled={!isEditMode}
              placeholder="pim_details.cadastre.name_placeholder"
              name="cadastreMap.title"
              label="pim_details.cadastre.name_label"
            />
            <GenericField
              disabled={!isEditMode}
              name="cadastreMap.fileName"
              placeholder="pim_details.cadastre.file_name_placeholder"
              label="pim_details.cadastre.file_name_placeholder"
            />
            <GenericField
              disabled={!isEditMode}
              placeholder="pim_details.cadastre.description_placeholder"
              name="cadastreMap.description"
              label="pim_details.cadastre.description_label"
            />
            <Box mb={4} />
            <LastUpdated dateUpdated={cadastreMap.dateUpdated} updatedBy={cadastreMap.updatedBy} />
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};
