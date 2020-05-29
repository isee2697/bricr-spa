import React from 'react';

import { SubSectionHeader, FormSubSection } from 'ui/molecules';
import { Grid, Collapse, ImageHolder, Box } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useStyles } from '../CadsatralMaps.styles';
import { useLocale } from 'hooks';

import { CadastreMapProps } from './CadastralMaps.types';
import { cadastralMapTypes } from './dictionaries';

export const CadastreMap = ({ cadastreMap, title, isEditMode, toggled, onToggleClick }: CadastreMapProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

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
            <ImageHolder withBorder src={!!cadastreMap.fileName ? cadastreMap.fileName : undefined} />
          </Grid>
          <Grid item md={7}>
            <GenericField
              id="mapName"
              disabled={!isEditMode}
              placeholder="pim_details.cadastre.name_placeholder"
              name="mapName"
              label="pim_details.cadastre.name_label"
            />
            <GenericField
              id="fileName"
              disabled={!isEditMode}
              name="fileName"
              placeholder="pim_details.cadastre.file_name_placeholder"
              label="pim_details.cadastre.file_name_placeholder"
            />
            <GenericField
              id="description"
              disabled={!isEditMode}
              placeholder="pim_details.cadastre.description_placeholder"
              name="description"
              label="pim_details.cadastre.description_label"
            />
            <Box mb={4} />
            {/* <LastUpdated dateUpdated={cadastreMap.dateUpdated} updatedBy={cadastreMap.updatedBy} /> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormSubSection
            noBorder
            title={formatMessage({ id: 'pim_details.cadastre.type_of_map' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <Box paddingTop={2}>
            <RadioGroupField disabled={!isEditMode} xs={4} lg={2} name="type" options={cadastralMapTypes} />
          </Box>
        </Grid>
      </Collapse>
    </>
  );
};
