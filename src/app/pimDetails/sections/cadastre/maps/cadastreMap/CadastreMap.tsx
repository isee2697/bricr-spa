import React from 'react';
import { useParams } from 'react-router-dom';
import { FormSubSection } from 'ui/organisms';
import { FormSubSectionHeader, TileButton } from 'ui/molecules';
import { Grid, Box, ImageHolder } from 'ui/atoms';
import { GenericField, RadioGroupField, UploadImageField } from 'form/fields';
import { UploadImageFieldTypes } from 'form/fields/uploadImageField/UploadImageField.types';
import { useStyles } from '../CadsatralMaps.styles';
import { useLocale, useCustomLabels } from 'hooks';
import { EntityWithFiles, LabelProperty } from 'api/types';

import { CadastreMapProps } from './CadastralMaps.types';
import { cadastralMapTypes } from './dictionaries';

export const CadastreMap = ({
  cadastreMap,
  mapFile,
  title,
  isEditMode,
  onAddCustomType,
  toggled,
  onToggleClick,
}: CadastreMapProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const customLabels = useCustomLabels(pimId, [LabelProperty.CadastreMap])[LabelProperty.CadastreMap] ?? [];

  return (
    <FormSubSection
      title={title}
      onOptionsClick={() => {}}
      initiallyOpened={false}
      isExpanded={toggled}
      onExpand={onToggleClick}
    >
      <Grid className={classes.content} container spacing={9}>
        <Grid item md={5}>
          <ImageHolder withBorder src={mapFile?.signedUrl || undefined} />
        </Grid>
        <Grid item md={7}>
          <GenericField
            id={`mapName.${cadastreMap.id}`}
            disabled={!isEditMode}
            placeholder="pim_details.cadastre.name_placeholder"
            name="mapName"
            label="pim_details.cadastre.name_label"
          />
          <UploadImageField
            name="file"
            type={UploadImageFieldTypes.DENSE}
            label="pim_details.media.add_picture_modal.file_name"
            entityID={mapFile?.entityID ?? ''}
            entity={EntityWithFiles.CadastreMap}
            disabled={!isEditMode}
            permission="private"
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
            options={[...cadastralMapTypes, ...customLabels]}
            actionElement={<TileButton onClick={onAddCustomType} isDisabled={!isEditMode} />}
          />
        </Box>
      </Grid>
    </FormSubSection>
  );
};
