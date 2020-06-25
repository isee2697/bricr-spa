import React from 'react';

import { FormSubSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Grid, Box, ImageHolder } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';
import { useStyles } from '../CadsatralMaps.styles';
import { useLocale, useGetPrivateFile } from 'hooks';
import { EntityWithFiles } from 'api/types';
import { UploadIcon } from 'ui/atoms/icons';

import { CadastreMapProps } from './CadastralMaps.types';
import { cadastralMapTypes } from './dictionaries';

export const CadastreMap = ({ cadastreMap, title, isEditMode, toggled, onToggleClick }: CadastreMapProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { data } = useGetPrivateFile(
    (cadastreMap.file && cadastreMap.file.key) || '',
    EntityWithFiles.CadastreMap,
    cadastreMap.id,
  );

  return (
    <FormSubSection title={title} onOptionsClick={() => {}} initiallyOpened={false}>
      <Grid className={classes.content} container spacing={9}>
        <Grid item md={5}>
          <ImageHolder withBorder src={data?.signedUrl || undefined} />
        </Grid>
        <Grid item md={7}>
          <GenericField
            id={`mapName.${cadastreMap.id}`}
            disabled={!isEditMode}
            placeholder="pim_details.cadastre.name_placeholder"
            name="mapName"
            label="pim_details.cadastre.name_label"
          />
          <GenericField
            id={`fileName.${cadastreMap.id}`}
            disabled={!isEditMode}
            name="name"
            placeholder="pim_details.cadastre.file_name_placeholder"
            label="pim_details.cadastre.file_name_placeholder"
            InputProps={{
              endAdornment: <UploadIcon />,
            }}
          />
          <GenericField
            id={`description.${cadastreMap.id}`}
            disabled={!isEditMode}
            placeholder="pim_details.cadastre.description_placeholder"
            name="description"
            label="pim_details.cadastre.description_label"
          />
          <Box mb={4} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.cadastre.type_of_map' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
        />
        <Box paddingTop={2} mb={2}>
          <RadioGroupField
            disabled={!isEditMode}
            xs={4}
            md={2}
            lg={2}
            spacing={1}
            name="type"
            options={cadastralMapTypes}
          />
        </Box>
      </Grid>
    </FormSubSection>
  );
};
